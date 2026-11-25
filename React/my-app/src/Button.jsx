
function Button({count, handleBtnClick}){


  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={handleBtnClick}
        >
            COUNT IS {count}
        </button>
      </section>

    </>
  )
}

export default Button