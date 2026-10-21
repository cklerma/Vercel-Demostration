
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  function generateRandomNumber() {
    const num = Math.floor(Math.random() * 10000) + 1;
    setRandomNumber(num);
  }

  const features = [
    {
      title: "Fast Deployment",
      description: "Deploy your Next.js projects to Vercel in seconds.",
    },
    {
      title: "Next.js",
      description: "Build modern web applications with React and Next.js.",
    },
    {
      title: "Cloud Hosting",
      description: "Your application is hosted and accessible worldwide.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          DemoCloud
        </h1>
        <span className="text-sm text-slate-400">
          Next.js + Vercel
        </span>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <span className="rounded-full bg-cyan-950 px-4 py-2 text-sm text-cyan-300">
          My First Vercel Deployment
        </span>

        <h2 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">
          Build Something
          <span className="block text-cyan-400">
            Awesome.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Welcome to my Next.js demo application!
          This website is built with React, styled with Tailwind CSS,
          and ready to deploy to Vercel.
        </p>

        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Explore Vercel →
        </a>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500"
          >
            <h3 className="mb-3 text-xl font-bold">
              {feature.title}
            </h3>
            <p className="text-slate-400">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Interactive Counter */}
      <section className="border-t border-slate-800 bg-slate-900/50 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Test Some Interactivity
        </h2>

        <p className="mt-3 text-slate-400">
          This counter uses React state.
        </p>

        <div className="mt-8 text-6xl font-bold text-cyan-400">
          {count}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Increment +
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800"
          >
            Reset
          </button>
        </div>
      </section>

      {/*Random Number Generator*/}
      <section className="border-t border-slate-800 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Random Number Generator
        </h2>

        <p className="mt-3 text-slate-400">
          Find out your lucky number!
        </p>

        <div className="mt-8 text-6xl font-bold text-cyan-400">
          {randomNumber}
        </div>

        <button
          onClick={generateRandomNumber}
          className="mt-8 rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Generate Number
        </button>
      </section>


      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        Built with Next.js • Powered by Vercel
      </footer>
    </main>
  );
}
