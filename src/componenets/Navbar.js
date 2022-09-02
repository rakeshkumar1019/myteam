/* This example requires Tailwind CSS v2.0+ */
import { Fragment,useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({navbar}) {
  let [currentNav,setCurrentNav]= useState(navbar)
  return (
    <Disclosure as="nav" className="bg-slate-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                 <h1 className='text-white bg-lime-800 px-5 py-1 rounded-md font-medium font-bold text-xl'>
                    NUXEO WEB UI
                </h1> 
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                      <Link
                        className={classNames(
                           currentNav === "dashboard" ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        to="/"
                        aria-current={ currentNav === "dashboard" ? 'page' : undefined}
                        onClick={() => setCurrentNav("dashboard")}
                      >
                        Dashboard
                      </Link>

                      <Link
                        to="/team"
                        className={classNames(
                           currentNav === "team"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={ currentNav === "team" ? 'page' : undefined}
                        onClick={() => setCurrentNav("team")}
                      >
                        Team
                      </Link>

                      <Link
                        to="/project"
                        className={classNames(
                           currentNav === "project"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={ currentNav === "project" ? 'page' : undefined}
                        onClick={() => setCurrentNav("project")}
                      >
                        Project
                      </Link>

                      <Link
                        to="/create/ticket"
                        className={classNames(
                           currentNav === "createTicket"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={ currentNav === "createTicket" ? 'page' : undefined}
                        onClick={() => setCurrentNav("createTicket")}
                      >
                        Create Ticket
                      </Link>

                      <Link
                        to="/reviews"
                        className={classNames(
                           currentNav === "reviews"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={ currentNav === "reviews" ? 'page' : undefined}
                        onClick={() => setCurrentNav("reviews")}
                      >
                        Give Review
                      </Link>

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              
                <Disclosure.Button
                  as="a"
                  to="/"
                  aria-current={ currentNav === "dashboard" ? 'page' : undefined}
                  onClick={() => setCurrentNav("dashboard")}
                  className={classNames(
                    currentNav === "dashboard"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                   'block px-3 py-2 rounded-md text-base font-medium'
                 )}
                >
                  Dashboard
                </Disclosure.Button>

                <Disclosure.Button
                  as="a"
                  href="/team"
                  aria-current={ currentNav === "team" ? 'page' : undefined}
                  onClick={() => setCurrentNav("team")}
                  className={classNames(
                    currentNav === "team"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                   'block px-3 py-2 rounded-md text-base font-medium'
                 )}
                >
                  Team
                </Disclosure.Button>

                <Disclosure.Button
                  as="a"
                  href="/project"
                  aria-current={ currentNav === "project" ? 'page' : undefined}
                  className={classNames(
                    currentNav === "project"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                   'block px-3 py-2 rounded-md text-base font-medium'
                 )}
                 onClick={() => setCurrentNav("project")}
                >
                  Project
                </Disclosure.Button>

                <Disclosure.Button
                  as="a"
                  href="/create/ticket"
                  aria-current={ currentNav === "createTicket" ? 'page' : undefined}
                  className={classNames(
                    currentNav === "createTicket"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                   'block px-3 py-2 rounded-md text-base font-medium'
                 )}
                 onClick={() => setCurrentNav("projecreateTicketct")}
                >
                  Create Ticket
                </Disclosure.Button>

                <Disclosure.Button
                  as="a"
                  href="/reviews"
                  aria-current={ currentNav === "reviews" ? 'page' : undefined}
                  className={classNames(
                    currentNav === "reviews"  ? 'bg-gray-900 text-white' : 'text-white-700 hover:bg-gray-900 hover:text-white',
                   'block px-3 py-2 rounded-md text-base font-medium'
                 )}
                 onClick={() => setCurrentNav("reviews")}
                >
                  Give Review
                </Disclosure.Button>
            
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
