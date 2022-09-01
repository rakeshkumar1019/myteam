/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/20/solid'

function ViewTicket() {
  return (
    <div className="container mx-auto px-4 sm:px-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">ELEMENTS-1234</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Nuxeo Elements</p>
        </div>
        <div className="border-t border-gray-200">
            <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Assigned To</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Rakesh Kumar Singh</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Sprint</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">v3.0.15-rc.7</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Branch</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">3.0.x</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">In Review</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Start Date</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">25 Aug 2022</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Close Date</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> NA </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Comment By: Loop1019 | 19 Aug 2022 </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                kindly follow the commit message standard.<br/>
                for reference : #577 (review)<br/>
                also kindly look cross-repo check is failing.<br/>
                looks good to me 👏 .
                
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Comment By: Gabrial | 31 Aug 2022 </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                Please see @semisse's comment on my PR and test this here as well.<br/>
                nuxeo/nuxeo-web-ui#1569 (comment)
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Comment By: Samuel | 2 Sep 2022 </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                In order to maintain code consistency, we should not remove indentation.
                https://github.com/nuxeo/nuxeo-elements/pull/595/files#diff-b3061b133042bc0ee57228dade1cbbeacabe5606b820be5c07f3f19b8e125383L80-R85<br/>
                mistake in class name class="ccomment-iron-icon".<br/>
                it should be class="comment-iron-icon".<br/>
                </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Links</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="ml-2 w-0 flex-1 truncate">https://github.com/nuxeo/nuxeo-web-ui/pull/1569</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <a href="https://github.com/nuxeo/nuxeo-web-ui/pull/1569" target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Visit 
                        </a>
                    </div>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span className="ml-2 w-0 flex-1 truncate">https://jira.nuxeo.com/browse/ELEMENTS-1364</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <a href="https://jira.nuxeo.com/browse/ELEMENTS-1364" target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Visit 
                        </a>
                    </div>
                    </li>
                </ul>
                </dd>
            </div>
            </dl>
        </div>
        </div>
    </div>
  )
}
export default ViewTicket