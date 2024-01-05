import { PlusIcon } from '@heroicons/react/16/solid';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from './state/_.redux.store';
import appSlice from './state/app.slice';
import Navbar from './components/navbar';
import Content from './components/content';
import Footer from './components/footer';

export default function App() {
  const dispatch = useDispatch();
  const { setIsAuthenticated } = appSlice.actions;
  const { isAuthenticated } = useSelector((state: ReduxState) => state.app);

  return (
    <div className="flex size-full flex-col bg-zinc-800 text-white">
      <Navbar />
      <Content>
        <div className="mx-20 flex flex-col">
          <h3 className="inline-flex flex-wrap items-center text-4xl">
            React
            <PlusIcon className="h-8 w-8" strokeWidth={1.2} />
            Tailwind
            <PlusIcon className="h-8 w-8" strokeWidth={1.2} />
            Vite
            <PlusIcon className="h-8 w-8" strokeWidth={1.2} />
            Redux
          </h3>
          <div className="flex flex-col items-center justify-center py-2">
            <div className="flex">
              {isAuthenticated ? 'Authenticated' : 'Unauthenticated'}
            </div>
            <div className="flex">
              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    dispatch(setIsAuthenticated(true));
                  } else {
                    dispatch(setIsAuthenticated(false));
                  }
                }}
                className="rounded-xl border-2 border-yellow-400 px-2 py-1"
              >
                {isAuthenticated ? 'Sign Out' : 'Sign In'}
              </button>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  );
}
