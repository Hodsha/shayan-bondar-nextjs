import  { useContext } from 'react'
import { ThemeContext } from './hooks/ThemeContext';
import './home.scss';
import { useTranslation } from 'react-i18next';


export default function Home() {


  return (
    <main >
      <div id="bodyStyle" >
        <div className="gradient">
          <section>
            <h2 className="text-4xl">Who is this guy?</h2>
            <br />
            <p>Hello there! My name is Shayan, and I am an aspiring junior developer from Germany.</p>
          </section>
          <section>
            <h2 className="text-3xl">About Me</h2><br />

            <h3 className="text-4xl">Coding Skills:</h3><br />
            <p className="space-maker">During my training, I acquainted myself with a variety of technologies and delved deeply into TypeScript and React. Additionally, I work independently with Node.js, C#, and SQL, which I find particularly enjoyable.</p>
            <h3 className="superscription">Sports:</h3><br />
            <p className="space-maker">I played football until the A-youth level and also joined a men's team at one point. Unfortunately, I had to stop playing soccer due to injuries. Currently, I practice martial arts, specifically MMA, which I thoroughly enjoy because it combines various martial disciplines.<br /> </p>
            <h3 className="superscription">Pets:</h3><br />
            <p className="space-maker">
            I have a Belgian Malinois named Scar who is already 3 years old. He is extremely playful and full of life. Although he is quite large, there's no need to be afraid of him. With a few treats, you can easily win him over.<br />
            </p>
            {/* <h3 className="superscription">{t('Goal')}</h3><br />
                        <p className="space-maker">well i can answer that quickly. just check out my page where i introduce you my favorite movies and series<br /> <br /> </p> */}

            {/* <h3 className="superscription">which places have you already visited?</h3><br />
                        <p className="space-maker">I haven't traveled much yet, but one of my goals is to visit as many capitals as possible. I've already been to Berlin, Rome, Paris, London and my next destination is Athens or Stockholm.  <br /> <br /> </p> */}

            <h3 className="superscription">Goals:</h3>
            <p className="space-maker"><br />I always strive for improvement, whether in sports, coding, or life in general.<br />

            </p>
            <h3 className="superscription">Music Preferences:</h3><br />
            <p>I enjoy listening to a wide range of genres. There's no such thing as a bad genre—it all depends on my mood or the setting.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
