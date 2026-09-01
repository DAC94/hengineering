import React, { useState, useId } from 'react';
import { X, Award, CheckCircle, Scroll, Shield, Send, Building } from 'lucide-react';

interface GrantApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GrantApplicationModal: React.FC<GrantApplicationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    category: 'sarsen-transport',
    proposal: '',
  });

  const nameInputId = useId();
  const emailInputId = useId();
  const instInputId = useId();
  const catSelectId = useId();
  const propTextId = useId();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      institution: '',
      category: 'sarsen-transport',
      proposal: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg border-2 border-amber-500 max-w-2xl w-full overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-4 bg-[#092e4a] text-white flex justify-between items-center border-b border-amber-500/40">
          <div className="flex items-center space-x-2 text-amber-300 font-serif-guild font-bold text-sm">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Charitable Trust Grant &amp; Bursary Application</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white cursor-pointer transition-colors"
            aria-label="Close grant modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 font-serif-guild">
                <strong>Guild Trust Fund Notice:</strong> Annual funding of £250,000 is awarded by the Court of Assistants to stone masons, structural civil engineers, and heritage conservationists.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={nameInputId} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-1">
                    Applicant Full Name
                  </label>
                  <input
                    id={nameInputId}
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Julian Thorne"
                    className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-[#154c76] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor={emailInputId} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    id={emailInputId}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian.thorne@heritage.org.uk"
                    className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-[#154c76] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={instInputId} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-1">
                    Institution / Workshop / Company
                  </label>
                  <input
                    id={instInputId}
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. Building Crafts College"
                    className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-[#154c76] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor={catSelectId} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-1">
                    Grant Category
                  </label>
                  <select
                    id={catSelectId}
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-[#154c76] focus:outline-none font-serif-guild bg-white"
                  >
                    <option value="sarsen-transport">The Sarsen Heavy Transport Research Grant (£5,000)</option>
                    <option value="lintel-bursary">The Lintel Tenon Apprenticeship Bursary (£2,500)</option>
                    <option value="solstice-fellowship">The Solstice Archaeo-Astronomy Fellowship (£3,500)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor={propTextId} className="block text-xs font-serif-guild font-bold text-[#154c76] uppercase tracking-wider mb-1">
                  Brief Project Summary / Intent
                </label>
                <textarea
                  id={propTextId}
                  required
                  rows={3}
                  value={formData.proposal}
                  onChange={(e) => setFormData({ ...formData, proposal: e.target.value })}
                  placeholder="Outline how this grant will support your stone masonry indentures or structural research..."
                  className="w-full px-3 py-2 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-[#154c76] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded border border-slate-300 text-slate-700 text-xs font-bold uppercase cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-serif-guild font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Grant Application</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-serif-guild font-bold text-[#154c76]">
                Grant Application Registered!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your grant request has been logged under Reference <strong>#WCoMB-GRANT-2026-{(Math.floor(Math.random() * 8999) + 1000)}</strong> and forwarded to Renter Warden Lord Bartholomew Stirling for Michaelmas Court review.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded bg-[#092e4a] text-amber-300 font-serif-guild font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
