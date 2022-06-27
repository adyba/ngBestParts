import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  users$!: Observable<User[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.fetchAll();
  }

  concatAddressFunction(address: Address) {
    console.log('concatFunction');
    return `${address.street}, ${address.city}, ${address.zipcode}`;
  }

  trackByFn(index: number, item: User): number {
    return item.id;
  }
}
