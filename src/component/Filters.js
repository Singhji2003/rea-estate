import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    return (
      <>
      <div class="filtesr mt-4 -mb-[8px]">
        <div class="filter-items   mt-5 flex justify-between  pt-3">
            <button class="border  w-[34%] h-11 space-x-2"><i class="fa-solid fa-sort text-gray-800"></i> Sort By</button>
            <button class="border  w-[34%] h-11 space-x-2"><i class="fa-solid fa-filter text-gray-800"></i> Filter</button>
            <button class="border  w-[34%] h-11 space-x-2"><i class="fa-solid fa-map text-gray-800"></i> Map</button>
        </div>
    </div>
      </>
    )
  }
}
