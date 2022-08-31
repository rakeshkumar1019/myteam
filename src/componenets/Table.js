import React from 'react'

function Table() {
  return (
    <div>
        <div className="container mx-auto px-4 sm:px-8">   
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Assigned to
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Project
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Jira Ticket
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Branch Name
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            PR LINK
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            PR Created
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Status
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Reviewed by
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                        ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                                <img
                                className="w-full h-full rounded-full"
                                src="https://avatars.githubusercontent.com/u/52422856?v=4"
                                alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                Rakesh Kumar Singh
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">UI Team</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 font-bold whitespace-no-wrap">WEB UI ELEMENTS</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 font-bold whitespace-no-wrap">ELEMENTS-1364</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            className="relative inline-block px-3 py-0 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">3.0.x</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button
                            type="button"
                            onClick={()=>{window.open('https://github.com/nuxeo/nuxeo-web-ui/pull/1569')}}
                        >
                            <div className="flex-shrink-0 w-5 h-5">
                                <img
                                className="w-full h-full"
                                src="https://cdn-icons-png.flaticon.com/512/376/376209.png"
                                alt=""
                                />
                            </div>
                        </button>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">In Review</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">2</span>
                            </span>
                        </td>
                        <td
                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >
                            <button
                            type="button"
                            className="inline-block text-gray-500 hover:text-gray-700"
                            >
                            <svg
                                className="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                />
                            </svg>
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                            <div className="flex-shrink-0 w-10 h-10">
                                <img
                                className="w-full h-full rounded-full"
                                src="https://avatars.githubusercontent.com/u/52422856?v=4"
                                alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                Rakesh Kumar Singh
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">UI Team</p>
                            </div>
                            </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 font-bold whitespace-no-wrap">WEB UI ELEMENTS</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 font-bold whitespace-no-wrap">ELEMENTS-1364</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            className="relative inline-block px-3 py-0 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">10.10</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button
                            type="button"
                            onClick={()=>{window.open('https://github.com/nuxeo/nuxeo-web-ui/pull/1569')}}
                        >
                            <div className="flex-shrink-0 w-5 h-5">
                                <img
                                className="w-full h-full"
                                src="https://cdn-icons-png.flaticon.com/512/376/376209.png"
                                alt=""
                                />
                            </div>
                        </button>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">Done</span>
                            </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">3</span>
                            </span>
                        </td>
                        <td
                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >
                            <button
                            type="button"
                            className="inline-block text-gray-500 hover:text-gray-700"
                            >
                            <svg
                                className="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                />
                            </svg>
                            </button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table
