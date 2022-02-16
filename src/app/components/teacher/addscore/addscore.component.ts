import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Score } from 'src/app/_models/Score';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-addscore',
  templateUrl: './addscore.component.html',
  styleUrls: ['./addscore.component.css'],
})
export class AddscoreComponent implements OnInit {
  public spinner = false;
  public updateScore = false;
  score: Score = {};
  getScore: any;
  nama: string = '';

  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getScore = JSON.parse(this.tokenStorage.getScoreUser()!);
    if (!this.getScore) {
      this.router.navigate(['/teacher/score']);
    }
    this.userService.getScoreSpecific(this.getScore.id).subscribe((score: any) => {
      this.score = score.body;
      console.log(score.body)
    });
    this._spinner();
  }

  onUpdate(): void {
    this.nama = this.getScore.nama;
    const score = (<HTMLInputElement>document.getElementById('score')).value;
    this.userService
      .updateScoreSpecific(this.getScore.id, this.nama, score)
      .subscribe(
        (res) => {
          alert('Score Berhasil di Update!');
          this.tokenStorage.deleteScoreUser();
          setTimeout(() => {
            this.router.navigate(['/teacher/score']);
          });
        },
        (err) => {
          alert('Score Gagal di Update!');
          this.tokenStorage.deleteScoreUser();
          setTimeout(() => {
            this.router.navigate(['/teacher/score']);
          });
        }
      );
  }

  onCancel(): void {
    this.tokenStorage.deleteScoreUser();
    setTimeout(() => {
      this.router.navigate(['/teacher/score']);
    }, 1000);
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  public onUpdateScore() {
    this.updateScore = this.updateScore === false ? true : false;
  }
}
