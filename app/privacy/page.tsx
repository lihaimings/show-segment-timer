export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <div className="bg-white rounded-2xl shadow-lg shadow-cyan-100/50 border border-cyan-100 p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p className="text-slate-600">
                Show Segment Timer is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                Show Segment Timer is designed with privacy in mind. We do not collect, store, or transmit any personal information to our servers.
              </p>
              <p className="text-slate-600">
                All data you enter (segments, durations, settings) is stored locally in your browser using localStorage. This data never leaves your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Storage</h2>
              <p className="text-slate-600">
                We use your browser&apos;s localStorage feature to save your segments and preferences. This allows you to return to the tool and find your data intact. You can clear this data at any time by clearing your browser&apos;s local storage or using the &quot;Reset All&quot; button in the tool.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
              <p className="text-slate-600">
                We do not use cookies for tracking or advertising purposes. Any cookies used are strictly necessary for the basic functionality of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
              <p className="text-slate-600">
                We do not integrate with any third-party analytics, advertising, or tracking services. Your usage of this tool is completely private.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p className="text-slate-600">
                Since all data is stored locally on your device, you have complete control over your information. We recommend not entering sensitive personal information into the tool, even though it remains on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy, please contact us through our website.
              </p>
            </section>

            <p className="text-sm text-slate-500 pt-4 border-t border-slate-200">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
