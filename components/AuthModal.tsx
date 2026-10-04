'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Check } from 'lucide-react';
import { cn } from '@/utils/formatters';
import { Logo } from '@/components/Logo';

interface AuthModalProps {
  isOpen: boolean;
  initialMode?: 'login' | 'signup';
  onClose: () => void;
}

export default function AuthModal({
  isOpen,
  initialMode = 'login',
  onClose,
}: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-md bg-[#FFF8E7] dark:bg-[#12180F] rounded-3xl border border-[#6B8E23]/30 shadow-2xl overflow-hidden z-10 p-6 sm:p-8">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-[#2B2B2B] dark:hover:text-[#FFF8E7]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOGO & TITLE */}
        <div className="text-center space-y-3 mb-6">
          <div className="flex justify-center">
            <Logo size="lg" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">
            {mode === 'login' ? 'Welcome Back to GudPals' : 'Create Your GudPals Account'}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {mode === 'login' 
              ? 'Enter your details to access your bookings and saved experiences.' 
              : 'Join thousands of members discovering the best events near them.'}
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="grid grid-cols-2 p-1 rounded-full bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 mb-6">
          <button
            onClick={() => setMode('login')}
            className={cn(
              "py-2 rounded-full text-xs font-bold transition-all",
              mode === 'login'
                ? "bg-[#2E7D32] text-white shadow-md shadow-[#2E7D32]/20"
                : "text-gray-600 dark:text-gray-400 hover:text-[#F28C28]"
            )}
          >
            Log In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={cn(
              "py-2 rounded-full text-xs font-bold transition-all",
              mode === 'signup'
                ? "bg-[#2E7D32] text-white shadow-md shadow-[#2E7D32]/20"
                : "text-gray-600 dark:text-gray-400 hover:text-[#F28C28]"
            )}
          >
            Sign Up
          </button>
        </div>

        {/* SUCCESS SUBMISSION STATE */}
        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#2E7D32]/20 text-[#2E7D32] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-extrabold text-lg text-[#2B2B2B] dark:text-[#FFF8E7]">
              {mode === 'login' ? 'Successfully Logged In!' : 'Account Created Successfully!'}
            </h4>
            <p className="text-xs text-gray-500">Redirecting to your GudPals dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {mode === 'signup' && (
              <div>
                <label className="text-xs font-bold text-[#6B8E23] block mb-1">Full Name</label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-xs font-medium text-[#2B2B2B] dark:text-[#FFF8E7] focus:outline-none focus:border-[#2E7D32]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-[#6B8E23] block mb-1">Email Address</label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-xs font-medium text-[#2B2B2B] dark:text-[#FFF8E7] focus:outline-none focus:border-[#2E7D32]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#6B8E23] block mb-1">Password</label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-xs font-medium text-[#2B2B2B] dark:text-[#FFF8E7] focus:outline-none focus:border-[#2E7D32]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-gray-400 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white font-extrabold text-xs shadow-md shadow-[#2E7D32]/30 hover:from-[#246528] hover:to-[#57741c] transition-all hover:scale-[1.01]"
            >
              {mode === 'login' ? 'Log In to GudPals' : 'Create Free Account'}
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#6B8E23]/30" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold text-[#6B8E23]">
                <span className="bg-[#FFF8E7] dark:bg-[#12180F] px-2">Or continue with</span>
              </div>
            </div>

            {/* Social Auth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(() => onClose(), 1200);
                }}
                className="py-2.5 rounded-xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-xs font-semibold text-[#2B2B2B] dark:text-[#FFF8E7] flex items-center justify-center gap-2 hover:border-[#F28C28]"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(() => onClose(), 1200);
                }}
                className="py-2.5 rounded-xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-xs font-semibold text-[#2B2B2B] dark:text-[#FFF8E7] flex items-center justify-center gap-2 hover:border-[#F28C28]"
              >
                <span>Apple</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}



