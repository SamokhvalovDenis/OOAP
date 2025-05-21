import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Deadline } from '../class/Prototype/Deadline';
import { PrintedImageCreator } from '../class/Factory_method/PrintedImageCreator';
import { HandwrittenImageCreator } from '../class/Factory_method/HandwrittenImageCreator';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {

    // Deadline
    const threeDaysLater = new Date();
    threeDaysLater.setDate(threeDaysLater.getDate() + 3);
    const deadline = new Deadline(threeDaysLater);
    console.log('Залишилось днів до дедлайну:', deadline.getDaysLeft());
    console.log('Чи прострочено дедлайн:', deadline.isOverdue());

    // Рукописне зображення
    const handwrittenCreator = new HandwrittenImageCreator();
    const handwrittenImage = handwrittenCreator.createImage();
    handwrittenImage.filePath = 'handwritten.png';
    console.log('Розпізнано (рукописне):', handwrittenImage.recognizeText());

    // Друковане зображення
    const printedCreator = new PrintedImageCreator();
    const printedImage = printedCreator.createImage();
    printedImage.filePath = 'printed.png';
    console.log('Розпізнано (друковане):', printedImage.recognizeText());
  }
}
