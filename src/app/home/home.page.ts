import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Deadline } from '../class/Prototype/Deadline';
import { PrintedImageCreator } from '../class/Factory_method/PrintedImageCreator';
import { HandwrittenImageCreator } from '../class/Factory_method/HandwrittenImageCreator';
import { CustomGroupCreator } from '../class/code/Group/CustomGroupCreator';
import { StudentFactory } from '../class/code/User/StudentFactory';
import { TeacherFactory } from '../class/code/User/TeacherFactory';
import { NoteController } from '../class/code/Note/NoteController';
import { NoteTitle } from '../class/code/Note/NoteTitle';
import { Tag } from '../class/code/Note/Tag';
import { ActionLogger } from '../class/code/ActionLogger';
import { EmailFactory } from '../class/code/Notification/EmailFactory';
import { PushFactory } from '../class/code/Notification/PushFactory';


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

    // Перевірка NoteController (одинак)
    let noteController = NoteController.getInstance();
    noteController = NoteController.getInstance();

    // Перевірка Logger (одинак)
    let logger = ActionLogger.getInstance();
    logger = ActionLogger.getInstance();
    logger.logAction("Тестування логу завершено");

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

    const groupCreator = new CustomGroupCreator();
    const group = groupCreator.createGroup();
    
    //Створення студента
    const studentCreator = new StudentFactory();
    const student = studentCreator.createUser("Andrii", "Tychyna", "andriitychyna2104@gmail.com", "somePassword", group);
    console.log('Створений студент: ', student);

    //Створення викладача
    const TeacherCreator = new TeacherFactory();
    const teacher = TeacherCreator.createUser("Hanna", "Krasovska", "hanna.krasovska@knu.ua", "somePassword", group);
    console.log('Створений викладач: ', teacher);
 
    //Копіювання нотатки/тегу
    const tag1 = new Tag("tag1", "black", "Arial", "path");
    const tag2 = new Tag("tag2", "blue", "Arial", "path");
    noteController.createNote(1, "My note", new NoteTitle("My Note Title", "Arial", 24), true, deadline, student, [], [tag1, tag2]);
    noteController.editNote(noteController.findById(1));
    console.log("Оригінальна нотатка: ", noteController.findById(1));
    console.log("Чернетка: ", noteController.findDraft(1));

    //Створення поштової ноифікації
    const emailNotif = new EmailFactory();
    const email = emailNotif.createNotification("Ви створили нове поштове повідомлення");
    console.log("Нотифікація: ", email);

    //Створення пуш ноифікації
    const pushNotif = new PushFactory();
    const push = pushNotif.createNotification("Ви створили нове push повідомлення");
    console.log("Нотифікація: ", push);

  }
}
