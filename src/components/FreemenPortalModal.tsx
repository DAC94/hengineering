import React, { useState } from 'react';
import { Lock, UserCheck, Key, LogOut, FileText, CheckCircle2, AlertCircle, X, ShieldAlert } from 'lucide-react';

interface FreemenPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreemenPortalModal: React.FC<FreemenPortalModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password.trim() === 'admin') {
      setIsLoggedIn(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid Livery Credentials. Access restricted to sworn Freemen & Court Members.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-lg border border-slate-200 border-t-4 border-t-[#154c76] shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#092e4a] text-white p-4 sm:p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-serif-guild font-bold text-base text-amber-300">
                Freemen's &amp; Court Members' Portal
              </h3>
              <p className="text-[11px] text-slate-300 font-garamond italic">
                The Worshipful Company of Megalith Builders
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {isLoggedIn ? (
            /* AUTHENTICATED PRIVILEGED CONTENT */
            <div className="space-y-6">
              
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <UserCheck className="w-8 h-8 text-amber-600 shrink-0" />
                  <div>
                    <h4 className="font-serif-guild font-bold text-[#154c76] text-sm">
                      Authenticated: Admin / Sworn Liveryman
                    </h4>
                    <p className="text-xs text-slate-600">
                      Guild Clearance Level: Court Administrator
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-serif-guild font-bold flex items-center space-x-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>

              {/* Confidential Guild Documents */}
              <div className="space-y-3">
                <h4 className="text-xs font-serif-guild font-bold uppercase tracking-wider text-[#154c76] border-b border-slate-200 pb-2">
                  Confidential Court Circulars &amp; Ballots
                </h4>

                <div className="p-3 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-xs">
                    <FileText className="w-4 h-4 text-[#154c76]" />
                    <span className="font-semibold text-slate-800">Q3 2026 Clerk's Financial Statement &amp; Audit</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-green-100 text-green-800 font-bold">Approved</span>
                </div>

                <div className="p-3 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-slate-800">Common Hall Lord Mayor Election Proxy Ballot</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-bold">Ballot Open</span>
                </div>

                <div className="p-3 rounded bg-slate-50 border border-slate-200 flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-xs">
                    <FileText className="w-4 h-4 text-[#154c76]" />
                    <span className="font-semibold text-slate-800">1998 Guild Cask Mead Allocation Voucher</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-blue-100 text-blue-900 font-bold">1 Bottle Allocated</span>
                </div>
              </div>

            </div>
          ) : (
            /* LOGIN FORM */
            <form onSubmit={handleLogin} className="space-y-4">
              
              <div className="text-center mb-6">
                <p className="text-xs text-slate-600">
                  Please enter your Guild Freeman credentials to log in. <br />
                  <span className="font-mono text-[11px] text-amber-800 font-bold">Demo Login: admin / admin</span>
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-red-800 text-xs flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Freeman Username</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. admin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#154c76]"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password / Security Pin</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="e.g. admin"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#154c76]"
                  />
                  <Key className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded bg-[#154c76] hover:bg-[#092e4a] text-white font-serif-guild font-bold text-xs uppercase tracking-wider shadow transition-colors"
              >
                Authenticate Freemen Access
              </button>

            </form>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex justify-between items-center text-[11px] text-slate-500 font-mono">
          <span>Encrypted Guild Portal</span>
          <span>hengineer.org</span>
        </div>

      </div>
    </div>
  );
};
