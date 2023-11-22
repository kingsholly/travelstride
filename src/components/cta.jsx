import React from "react";

function cta() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>

          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-[#ffffff] shadow-sm hover:bg-[#166534] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cta;
