import React from 'react';
import { ShieldCheck, Mail, Scroll, FileText, Lock, Landmark } from 'lucide-react';
import { CoatOfArms } from '../CoatOfArms';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-900 text-xs font-serif-guild font-bold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          <span>UK GDPR &amp; Data Protection Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif-guild text-[#154c76] mb-3">
          Privacy Policy &amp; Data Notice
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-4" />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
          The Worshipful Company of Megalith Builders is committed to protecting the privacy of Liverymen, Freemen, apprentices, and website visitors under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
        </p>
      </div>

      {/* Main Privacy Notice Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-lg border border-slate-200 shadow-sm border-t-4 border-t-[#154c76] space-y-8 text-slate-700 leading-relaxed font-normal text-sm">
          
          {/* Section 1: Data Controller */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif-guild font-bold text-[#154c76] flex items-center space-x-2 border-b border-slate-200 pb-2">
              <Landmark className="w-5 h-5 text-amber-600" />
              <span>1. Data Controller &amp; Contact Details</span>
            </h2>
            <p>
              The Data Controller for The Worshipful Company of Megalith Builders (Livery Company No. 115) is the Clerk to the Worshipful Company, <strong>Arthur Howard, Esq.</strong>
            </p>
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-xs font-mono space-y-1 text-slate-800">
              <p><strong>Official Office:</strong> Megalithic Hall, Gresham Street, London EC2V 7HH</p>
              <p><strong>Email:</strong> <a href="mailto:clerk@hengineer.org" className="text-[#154c76] underline font-bold">clerk@hengineer.org</a></p>
              <p><strong>Telephone:</strong> 020 7946 0115</p>
            </div>
          </div>

          {/* Section 2: Data Collected */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif-guild font-bold text-[#154c76] flex items-center space-x-2 border-b border-slate-200 pb-2">
              <FileText className="w-5 h-5 text-amber-600" />
              <span>2. Personal Data We Collect &amp; Process</span>
            </h2>
            <p>
              We collect and process personal data necessary for governing the affairs of the Worshipful Company, organizing civic banquets, administering apprenticeships, and maintaining the Court Roll of Freemen:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li><strong>Contact Information:</strong> Full name, title, postnominal letters, mailing address, email, and phone numbers.</li>
              <li><strong>Livery Governance Records:</strong> Indenture dates, Quarterage payment status, Court of Assistants elections, and proxy ballots.</li>
              <li><strong>Educational &amp; Grant Applications:</strong> Academic transcripts, stone masonry apprenticeship proposals, and institutional affiliations.</li>
              <li><strong>Stonemason Marks:</strong> Personal geometric masons' marks registered with the Clerk's Registry.</li>
            </ul>
          </div>

          {/* Section 3: Legal Basis */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif-guild font-bold text-[#154c76] flex items-center space-x-2 border-b border-slate-200 pb-2">
              <Lock className="w-5 h-5 text-amber-600" />
              <span>3. Legal Basis for Processing</span>
            </h2>
            <p>
              Under UK GDPR Article 6, our legal grounds for processing personal data include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
              <li><strong>Legitimate Interests:</strong> Fulfilling civic duties, organizing Common Hall elections, and managing Guild education trusts.</li>
              <li><strong>Contractual Performance:</strong> Processing Freedom of the City applications and banquet ticket registrations.</li>
              <li><strong>Compliance with Legal Obligations:</strong> Financial record-keeping for the Guild Educational Charitable Trust.</li>
            </ul>
          </div>

          {/* Section 4: Cookies & Local Storage */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif-guild font-bold text-[#154c76] flex items-center space-x-2 border-b border-slate-200 pb-2">
              <Scroll className="w-5 h-5 text-amber-600" />
              <span>4. Cookies &amp; Local Browser Storage Policy</span>
            </h2>
            <p>
              This website uses essential browser storage to support interactive Guild features:
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 space-y-2">
              <p><strong>Essential Cookies:</strong> Storing consent preferences and session authorization.</p>
              <p><strong>Local Storage:</strong> Persisting Sarsen Transport friction calculation parameters and your registered Megalithic Mason's Mark to stamp your Freedom Certificate.</p>
            </div>
          </div>

          {/* Section 5: Data Retention & Subterranean Microfiche */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif-guild font-bold text-[#154c76] flex items-center space-x-2 border-b border-slate-200 pb-2">
              <Landmark className="w-5 h-5 text-amber-600" />
              <span>5. Data Retention &amp; Guild Archives</span>
            </h2>
            <p>
              Member records, Freedom admissions, and Court rolls form a permanent historical archive of the City of London. Physical documents prior to 2026 are preserved on offline microfiche in the subterranean Sarsen Vaults beneath Megalithic Hall.
            </p>
          </div>

          {/* Section 6: Your Individual Rights */}
          <div className="space-y-3">
            <h2 className="text-lg font-serif-guild font-bold text-[#154c76] flex items-center space-x-2 border-b border-slate-200 pb-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <span>6. Your Rights Under UK GDPR</span>
            </h2>
            <p>
              You have the right to request access to your personal data (Subject Access Request), request rectification of inaccuracies, or lodge a complaint with the Information Commissioner’s Office (ICO) at <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-[#154c76] underline font-bold">ico.org.uk</a>.
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-6 rounded-lg bg-[#092e4a] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-l-4 border-amber-500">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif-guild font-bold text-amber-300 text-base">
                Data Protection Inquiries
              </h3>
              <p className="text-xs text-slate-300">
                Contact Clerk Arthur Howard, Esq. for all data protection and privacy requests.
              </p>
            </div>
            <a
              href="mailto:clerk@hengineer.org?subject=Data%20Protection%20Inquiry"
              className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
            >
              Email Clerk
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};
