import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  slides = [{'image': '../../assets/1.png'}, 
            {'image': '../../assets/3.png'},
            {'image': '../../assets/4.jfif'},
            {'image': '../../assets/5.jfif'},
            {'image': '../../assets/6.jfif'},
            {'image': '../../assets/7.jfif'},
            {'image': '../../assets/11.jfif'},
            {'image': '../../assets/12.jfif'},
            {'image': '../../assets/14.jfif'}
           ];

  opinions = ["<<Je recommande Mohamed car c\'est un professeur sérieux  qui aime enseigner sa langue natale. Il a une bonne méthode et de bons supports. Vous progresserez aussi bien à l\'écrit qu\'à l'oral avec ses cours.>> (Khadija)", 
              "<<C\'est un professeur qui travail avec discipline. Il pousse et encourage ses élèves a donner le meilleure d'eux même. Professeur strict dans l\'apprentissage, mais le résultat est là et on voit de nous même les progrès. Si vous êtes une personne qui souhaite avancer dans la langue arabe avec de la discipline et de la pédagogie, n\'hésitez pas à prendre contact avec lui. Je vous le recommande.>> (Hafsa)",
              "<<J\'ai vraiment progressée en quelques semaines avec lui, alhamdoulillah. Je recommande ce cher professeur les yeux fermés, exigent comme il le faut et très pédagogue, je suis ravie de lui avoir fait confiance.>> (Soumaya)",
              "<<J\'ai fait des cours avec le professeur Mohamed. J\'ai été satisfaite maa shaa allah de la qualité des cours . Il est toujours disponible quand on a des questions et s\'investit pour qu\'on avance elhamdoulilallah et fait même des recherches. Je me souviens une fois je lui ai posé une question sur un hadith qui été enfait faible et m\'a cherché la preuve maa shaa Allah en arabe.>> (Fabienne)",
              "<<Programme parfait pour tous les niveaux (débutant ou étudiant en science). Professeur sérieux avec une excellente maîtrise de la langue arabe et une bonne pédagogie. Les manuels utilisés sont les mêmes manuels enseignés aux étudiants en science. Je le recommande à tout le monde. N\'hésitez pas, vous ne serez pas déçu.>> (Mohamed)",
              "<<C\'est un professeur au grand cœur qui aime ce qu\'il fait et cela facilite l\'apprentissage. J\'aime beaucoup aussi sa gentillesse et sa flexibilité.>> (Wafaa)",
              "<<C\'est un prof sévère, mais aussi rigolo. Il a la pédagogie. Je vous le recommande vivement>> (George)",
              "<<Mohamed est un professeur patient qui ne compte pas ses heures pour améliorer notre arabe. Connaissant beaucoup d\'anecdotes, hadith ou proverbes, ses cours deviennent en même temps des cours de culture. Je vous le recommande! Attention cependant : âmes susceptibles s’abstenir!>> (Morgane)",
              "<<J\'ai étudié plus d\'un an avec Mohamed. Je n\'ai pas connu de meilleur enseignant depuis mes cours avec lui ma shaa Allah. Il est très patient malgré mes difficultés. Il nous transmet son amour de langue arabe. Sa méthode est très bien et surtout il est très disponible.>> (Bamaka)"
             ];
}
