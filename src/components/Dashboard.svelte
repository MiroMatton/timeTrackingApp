<script lang="ts">
  export let displayName: string;
  export let photoURL: string;
  export let daily;
</script>

<div class="grid">
  <div class="profile">
    <div class="innerBox small">
      <img
        src={photoURL}
        class="profileImg"
        alt="user avatar"
        referrerpolicy="no-referrer"
      />
      <p>Report for</p>
      <h2>{displayName}</h2>
      <img
        id="logout"
        on:click|self
        src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-exit-essentials-tanah-basah-glyph-tanah-basah-2.png"
        alt="logout"
      />
    </div>
    <h3>Daily</h3>
    <h3>Weekly</h3>
    <h3>Monthly</h3>
  </div>
  <div class="box orange">
    <img src="src/assets/icon-work.svg" alt="work" />
    <div class="innerBox">
      <h3>Work</h3>
      <h1>{daily ? daily.work : 0}hrs</h1>
    </div>
  </div>
  <div class="box blue">
    <img src="src/assets/icon-play.svg" alt="play" />
    <div class="innerBox">
      <h3>Play</h3>
      <h1>{daily ? daily.play : 0} hrs</h1>
    </div>
  </div>
  <div class="box red">
    <img src="src/assets/icon-study.svg" alt="study" />
    <div class="innerBox">
      <h3>Study</h3>
      <h1>{daily ? daily.study : 0}hrs</h1>
    </div>
  </div>
  <div class="box green">
    <img src="src/assets/icon-exercise.svg" alt="Exercise" />
    <div class="innerBox">
      <h3>Exercise</h3>
      <h1>{daily ? daily.exercise : 0} hrs</h1>
    </div>
  </div>
  <div class="box violet">
    <img src="src/assets/icon-social.svg" alt="social" />
    <div class="innerBox">
      <h3>Social</h3>
      <h1>{daily ? daily.social : 0} hrs</h1>
    </div>
  </div>
  <div class="box yellow">
    <img src="src/assets/icon-self-care.svg" alt="self care" />
    <div class="innerBox">
      <h3>Self Care</h3>
      <h1>{daily ? daily.selfCare : 0} hrs</h1>
    </div>
  </div>
</div>

<style lang="scss">
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .profile {
      grid-row-start: span 2;
      align-items: flex-start;

      h2 {
        color: var(--White);
      }

      h3 {
        color: var(--White);
        font-size: 1.5rem;
        padding: 1.5rem 0 0 1rem;
        font-weight: 500;
      }
    }

    .profileImg {
      border-radius: 50rem;
      border: 0.2rem solid var(--White);
      margin-bottom: 5rem;
    }

    .box {
      align-items: flex-end;
      justify-content: flex-end;
      overflow: hidden;
    }

    .box,
    .profile {
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
      margin: 1rem;
      background-color: var(--DarkBlue);

      img {
        position: relative;
        top: 1.5rem;
        z-index: 0;
        max-height: 80px;
        margin-right: 1rem;
      }

      #logout {
        width: 2rem;
        cursor: pointer;
      }

      .innerBox {
        min-height: 80%;
        width: 100%;
        border-radius: inherit;
        padding: 1rem;
        background-color: var(--DarkBlue);
        z-index: 10;

        &.small {
          min-height: 60%;
          background-color: var(--DesaturatedBlue);
        }

        h3 {
          color: var(--White);
          font-size: 1.5rem;
          font-weight: bold;
        }

        h1 {
          color: var(--White);
          font-size: 4rem;
          font-weight: 300;
        }

        p {
          color: var(--PaleBlue);
        }
      }

      &.orange {
        background-color: var(--Orange);
      }

      &.blue {
        background-color: var(--SoftBlue);
      }

      &.red {
        background-color: var(--LightRed);
      }

      &.green {
        background-color: var(--LimeGreen);
      }

      &.violet {
        background-color: var(--Violet);
      }

      &.yellow {
        background-color: var(--SoftOrange);
      }
    }
  }
</style>
