import React, { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';
import { IRepo } from '../../features/page-repo/types';

type Props = {
  data: IRepo[];
};

const width = 900;
const height = 400;
const margin = { top: 30, right: 0, bottom: 30, left: 40 };

const BarChart: React.FC<Props> = ({ data }) => {
  const chartRef = useRef(null);

  const draw = useCallback((data: IRepo[]) => {
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length).map(String))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.open_issues_count) ?? 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g: any) =>
      g.attr('transform', `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[Number(i)].name)
          .tickSizeOuter(0),
      );

    const yAxis = (g: any) =>
      g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call((g: any) => g.select('.domain').remove())
        .call((g: any) =>
          g
            .append('text')
            .attr('x', -margin.left)
            .attr('y', 10)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'start')
            .attr('transform', `rotate(45deg)`),
        );
    /** Clear baseSvg */
    d3.select(chartRef.current).selectAll('svg').remove();

    /** Define new baseSvg */
    const baseSvg = d3.select(chartRef.current).append('svg');

    baseSvg
      .attr('viewBox', `0, 0, ${width}, ${height}`)
      .attr('width', width)
      .attr('height', height);

    baseSvg
      .append('g')
      .attr('fill', 'steelblue')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d, i: any) => String(x(i.toString()) ?? ''))
      .attr('y', (d: IRepo) => y(d.open_issues_count))
      .attr('height', (d: IRepo) => y(0) - y(d.open_issues_count))
      .attr('width', x.bandwidth());

    baseSvg.append('g').call(xAxis);
    baseSvg.append('g').call(yAxis);
  }, []);

  useEffect(() => {
    draw(data);
  }, [draw, data]);

  return <div ref={chartRef} />;
};

export default BarChart;
