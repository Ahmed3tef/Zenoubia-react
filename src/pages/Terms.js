import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StaticLayout } from '../components';

const Terms = () => {
  const params = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params]);
  return (
    <StaticLayout header='Bienvenue à Zenoubia !'>
      <div className='static__text'>
        Ces termes et conditions décrivent les règles et règlements
        d'utilisation du site Web de{' '}
        <span className='static__text-trademark'>Zenoubia</span>, situé à
        l'adresse{' '}
        <span className='static__text-trademark'>www.zenoubia.com</span>.
      </div>
      <div className='static__text'>
        En accédant à ce site Web, nous supposons que vous acceptez ces termes
        et conditions. Ne continuez pas à utiliser{' '}
        <span className='static__text-trademark'>Zenoubia</span> si vous
        n'acceptez pas de prendre tous les termes et conditions énoncés sur
        cette page.
      </div>
      <div className='static__text'>
        La terminologie suivante s'applique aux présentes conditions générales,
        à la déclaration de confidentialité et à l'avis de non-responsabilité et
        à tous les accords : "Client", "Vous" et "Votre" font référence à vous,
        la personne qui se connecte sur ce site Web et qui se conforme aux
        conditions générales de la Société. « La Société », « Nous-mêmes », «
        Nous », « Notre » et « Nous » font référence à notre Société. « Partie
        », « Parties » ou « Nous » désignent à la fois le Client et nous-mêmes.
      </div>
      <div className='static__text'>
        Tous les termes se réfèrent à l'offre, à l'acceptation et à la
        considération du paiement nécessaire pour entreprendre le processus de
        notre assistance au Client de la manière la plus appropriée dans le but
        exprès de répondre aux besoins du Client en ce qui concerne la
        fourniture des services déclarés de la Société, conformément à et sous
        réserve de la législation en vigueur aux Pays-Bas. Toute utilisation de
        la terminologie ci-dessus ou d'autres mots au singulier, au pluriel, en
        majuscules et/ou il/elle ou ils, sont considérés comme interchangeables
        et donc comme faisant référence à ceux-ci.
      </div>
      <div className='static__text'>
        Nous employons l'utilisation de cookies. En accédant à{' '}
        <span className='static__text-trademark'>Zenoubia</span>, vous acceptez
        l'utilisation de cookies conformément à la politique de confidentialité
        de <span className='static__text-trademark'>Zenoubia</span>. La plupart
        des sites Web interactifs utilisent des cookies pour nous permettre de
        récupérer les détails de l'utilisateur pour chaque visite. Les cookies
        sont utilisés par notre site Web pour activer la fonctionnalité de
        certaines zones afin de faciliter la tâche des personnes visitant notre
        site Web. Certains de nos partenaires affiliés/publicitaires peuvent
        également utiliser des cookies.
      </div>
      <div className='static__text'>
        <span className='static__text-trademark'>Licence</span>
        <br /> Sauf indication contraire,{' '}
        <span className='static__text-trademark'>Zenoubia</span> et/ou ses
        concédants détiennent les droits de propriété intellectuelle pour tout
        les articles sur{' '}
        <span className='static__text-trademark'>Zenoubia</span>. Tous les
        droits de propriété intellectuelle sont réservés. Vous pouvez y accéder
        à partir de <span className='static__text-trademark'>Zenoubia</span>{' '}
        pour votre usage personnel sous réserve des restrictions définies dans
        les présentes conditions générales.
      </div>
      <div className='static__text'>
        <div className='static__text-header mb-md-2'>Il ne faut pas:</div>
        <ul className='static__text-list'>
          <li>
            Republier les articles de{' '}
            <span className='static__text-trademark'>Zenoubia</span>
          </li>
          <li>
            Vendre, louer ou sous-licencierles articles de{' '}
            <span className='static__text-trademark'>Zenoubia</span>
          </li>

          <li>
            Reproduire, dupliquer ou copier les articles de{' '}
            <span className='static__text-trademark'>Zenoubia</span>
          </li>
          <li>
            Redistribuer le contenu de{' '}
            <span className='static__text-trademark'>Zenoubia</span>
          </li>
        </ul>
        Aucune utilisation du logo de{' '}
        <span className='static__text-trademark'>Zenoubia</span> ou d'autres
        illustrations ne sera autorisée pour le lien en l'absence d'un accord de
        licence de marque.
      </div>
    </StaticLayout>
  );
};

export default Terms;
