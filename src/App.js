
function App() {
  return (
    <div className="App">
      <header class="card" id="headerCard">
      <div id="redditLogo"></div>

      <button class="dropDown">
        <div class="dropDownSelected">
          <i class="fa-solid fa-house"></i>Home
        </div>

        <i class="fa-solid fa-chevron-down"></i>
      </button>

      <div class="headerSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="headerInput" placeholder="Search Reddit" />
      </div>

      <div class="headerButtons">
        <button class="squareButton">
          <i class="fa-solid fa-arrow-trend-up headerIcon"></i>
        </button>

        <button class="squareButton">
          <i class="fa-solid fa-coins headerIcon"></i>
        </button>

        <button class="squareButton">
          <i class="fa-brands fa-rocketchat headerIcon"></i>
        </button>

        <span class="headerButtonDivider"></span>

        <button class="squareButton">
          <i class="fa-regular fa-comment-dots headerIcon"></i>
        </button>

        <button class="squareButton">
          <i class="fa-regular fa-bell headerIcon"></i>
        </button>

        <button class="squareButton">
          <i class="fa-solid fa-plus headerIcon"></i>
        </button>

        <button class="headerAdvertiseButton">
          <i class="fa-solid fa-bullhorn"></i>
          Advertise
        </button>
      </div>
      <button class="dropDown" id="userMenu">
        <div class="userMenuDetails">

          <div class="userMenuPicture"></div>

          <div class="userMenuText">
            username
            <div class="userMenuKarma">
              <i class="fa-solid fa-fan"></i>
              1.3k karma
            </div>
          </div>
        </div>

          <i class="fa-solid fa-chevron-down userMenuIcon"></i>
      </button>
    </header>
    </div>
  );
}

export default App;
