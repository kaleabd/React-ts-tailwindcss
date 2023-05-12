/**
 * The function returns a React component that displays a starter kit with React, Typescript,
 * TailwindCss, and Vite.
 * @returns The `App` component is being returned, which renders a div with a flexbox layout and a
 * child div with a background color of indigo, rounded corners, and a hover effect. The child div
 * contains a heading, a subheading, and a paragraph with a link.
 */
const App = () => {
  return (
    <div className='flex justify-center items-center h-screen  '>
      <div className='flex flex-col items-center bg-indigo-400 p-4 rounded-lg transform hover:scale-105 transition-all ease-in-out duration-300'>
        <h2 className='text-2xl font-bold'>Starter kit!</h2>
        <h2 className='text-4xl font-bold'>React + Typescript + TailwindCss + Vite</h2>
        <p className='mt-6 text-sm font-bold'>Made ❤ <a href="https://t.me/kaleabdereje" target='_blank' className='hover:underline'>Kaleab Dereje</a> </p>
      </div>

    </div>
  )
}

export default App