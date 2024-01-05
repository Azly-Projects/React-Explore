import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../state/_.redux.store';
import appSlice from '../state/app.slice';

export default function Navbar() {
  const { isAuthenticated } = useSelector((state: ReduxState) => state.app);
  const { setIsAuthenticated } = appSlice.actions;
  const dispatch = useDispatch();

  return (
    <nav className="border-gray-200 bg-white px-4 py-3 text-black">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center">
        <div className="flex flex-1">
          <h3 className="text-xl">Brand Name</h3>
        </div>
        <div className="hidden sm:flex sm:flex-1">
          <ul className="flex gap-3">
            <li className="cursor-pointer rounded-lg border-2 border-blue-400 px-2 py-1 text-amber-400">
              Menu 1
            </li>
            <li className="cursor-pointer rounded-lg border-2 border-blue-400 px-2 py-1 text-amber-400">
              Menu 2
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          {isAuthenticated ? (
            <div className="flex">
              <button
                className="rounded-lg border-2 border-red-600 px-2 py-1"
                onClick={() => dispatch(setIsAuthenticated(false))}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              className="rounded-lg border-2 border-black px-2 py-1"
              onClick={() => dispatch(setIsAuthenticated(true))}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
