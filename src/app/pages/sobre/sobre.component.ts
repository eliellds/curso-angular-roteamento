import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (res) => console.log(res?.['id'], res?.['username'], res),
      error: (err) => console.log(err)
    });

    // path: /sobre/1/username?nome=Eliel&sobrenome=Lopes
    // retorna no console um objeto { nome: 'Eliel', sobrenome: 'Lopes' }
    this.activatedRoute.queryParams.subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });

    setInterval(() => {
      // this.router.navigate(['404']);
      this.router.navigateByUrl('404');
    }, 5000)
  }

}
