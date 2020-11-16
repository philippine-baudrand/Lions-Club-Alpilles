// == Import npm
import React from 'react';
import './club.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Club = () => (
  <div>
    <Header />
    <div className="club">

    <div className="paragraph">
    <h1>Club Féminin Paradou les Alpilles</h1>
    <p>Le Lions Club Paradou-Les-Alpilles regroupent dans la convivialité et l'esprit de bonne camaraderie 29 femmes autour des valeurs humanistes du Lionisme</p>
    </div>
    <div className="paragraph">
    <h1>QUI SONT LES LIONS?</h1>

    Des hommes et des femmes libres qui ont ajouté à leur vie une dimension humaniste et humanitaire. Une devise : "Nous Servons". 
    </div>
    <div className="paragraph">
    <h1>QUELLES SONT LES VALEURS LIONS?</h1>
        Les Lions définissent leurs actions au cours de réunion bi-mensuelles, où ils partagent des valeurs d'amitié et de solidarité, leur diversité socioculturelle permettant à chacun d'élargir sa vision de la société.
        </div>
    <div className="paragraph">
    <h1>QUE FONT LES LIONS?</h1>
        Les Lions visent à l'épanouissement de la personne humaine. Ils développement de multiples opérations locales, nationales et internationales dans le domaine du Savoir, de l'Éducation et de la Culture. Ils favorisent le rapprochement entre les peuples par les échanges de jeunes du monde entier.
        Les Lions apportent leur soutien aux plus démunis. Leurs actions peuvent être mondiales, comme lors de catastrophes naturelles majeures ou pour des programmes en faveur de grandes causes telle que la Lutte contre la Cécité. Au quotidien, elles sont nationales et locales, reflétant l'implication profonde des Lions dans la vie de la cité.
        </div>
    <div className="paragraph">
    <h1>COMMENT SE FINANCENT-ILS?</h1>
        Les Lions financent leurs multiples actions en organisant des opérations menées par eux-mêmes. La totalité des résultats financiers de ces manifestations est affectée à l'oeuvre définie au préalable. Les frais de fonctionnement du Lions Club sont entièrement couverts par les cotisations des Lions.

        Le Lions Clubs International est la plus grande organisation de clubs service dans le monde, avec 1,4 million de membres dans à peu près 46 000 clubs, répartis dans plus de 200 pays et aires géographiques à travers le monde.
        </div>
    <div className="paragraph">
    <h1>Réunions</h1>
Quand ?:
2ème et 4ème mercredis du mois
Où ?:
2ème mercredi du mois - réunion statutaire suivi d'un repas - Salle polyvalente de Paradou les Alpilles 4ème mercredi du mois - réunion à la maison des associations d'Arles
</div>
</div>
    <Footer />
  </div>
);
export default Club;
