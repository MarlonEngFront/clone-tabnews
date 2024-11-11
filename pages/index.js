import Link from "next/link";

function Home() {
  return (
    <>
      {/* <h1>Clone Tabnews</h1> */}
      {/* <Link href="/menu">ir para o menu</Link> */}

        <h1>Teste de visibilidade de cookies</h1>

      <section className="banner-clarotv">
        <embed
          src="https://now-fe4.hlg-netnow.net/embedplayer?accessTokenId=149riGsO82iecGSCxKxNZO5ltlTX"
          title="Banner Player"
          width="100%" // ajuste o tamanho conforme necessário
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></embed>
      </section>

      <style jsx>{`
        .banner-clarotv {
          width: 100%;
    overflow: hidden;
    background-color: var(--color-neutral-lightest);
    display: flex;
    border-radius: var(--border-radius-xxs);
    border: 1px solid var(--color-neutral-medium);
    box-sizing: border-box;
    position: relative;
    height: 202px;
        }
        embed {
          border: 1px solid #ddd;
          border-radius: 8px; // opcional, para bordas arredondadas
        }
      `}</style>
    </>
  );
}

export default Home;
