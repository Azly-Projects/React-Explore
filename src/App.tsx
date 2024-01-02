export default function App() {
  return (
    <div className="flex flex-col h-full bg-zinc-800 text-white">
      <div className="flex basis-4 border-1 border-blue-400">
        <p>
          <b>header</b>
          <br />
          <br />
          (sized to content)
        </p>
      </div>
      <div className="flex-auto border-1 border-red-600">
        <p>
          <b>content</b>
          (fills remaining space)
        </p>
      </div>
      <div className="flex basis-10 border-2 border-green-400">
        <p>
          <b>footer</b> (fixed height)
        </p>
      </div>
    </div>
  );
}
