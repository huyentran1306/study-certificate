import React, { type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export default class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application render failure:', error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-5">
        <section className="w-full max-w-lg rounded-3xl border border-rose-100 bg-white p-7 text-center shadow-xl shadow-slate-200/50">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <h1 className="mt-4 text-xl font-black text-slate-900">Ứng dụng vừa gặp lỗi hiển thị</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Tiến độ học vẫn được giữ nguyên. Hãy tải lại phiên làm việc để tiếp tục.
          </p>
          {this.state.message && (
            <p className="mt-3 rounded-xl bg-slate-50 p-3 text-left font-mono text-[11px] text-slate-500">
              {this.state.message}
            </p>
          )}
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-indigo-600"
          >
            <RefreshCw className="h-4 w-4" />
            Tải lại ứng dụng
          </button>
        </section>
      </main>
    );
  }
}
