import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <span className="text-2xl font-bold">+</span>
          <div className="text-2xl font-bold">Landing Page Generator</div>
        </div>

        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-gray-600 dark:text-gray-400">
            Create customized landing pages to help validate your business ideas
            quickly.
          </p>

          <ol className="font-mono list-inside list-decimal text-sm/6 space-y-3">
            <li className="tracking-[-.01em]">
              Open your AI assistant (Claude, ChatGPT, etc.)
            </li>
            <li className="tracking-[-.01em]">
              Ask it to:{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                "Read the prompt.md file and help me create a landing page"
              </code>
            </li>
            <li className="tracking-[-.01em]">
              Answer questions about your business and style preferences
            </li>
          </ol>

          <div className="rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] p-4 space-y-2">
            <p className="text-sm font-semibold">💡 Pro Tips:</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                • Add reference images to{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 rounded">
                  /references
                </code>{" "}
                folder
              </li>
              <li>• Set up Formbear for waitlist/newsletter forms</li>
              <li>• Use environment variables for API keys</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://formbear.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🐻</span>
            Setup Formbear
          </a>
        </div>
      </main>
    </div>
  );
}
