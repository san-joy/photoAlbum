import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object
  phone: string;
  website: string;
  company: object;
}

const USER_DATA: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {geo: {'lat': '-37.3159', 'lng': '81.1496'}, city: 'Gwenborough', suite: 'Apt. 556', street: 'Kulas Light', zipcode: '92998-3874'},
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {'bs': 'harness real-time e-markets', 'name': 'Romaguera-Crona', 'catchPhrase': 'Multi-layered client-server neural-net'}
 },
 {
    id: 2,
    name: "Arvin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {geo: {'lat': '-43.9509', 'lng': '-34.4618'}, city: 'Wisokyburgh', suite: 'Suite 879', street: 'Victor Plains', zipcode: '90566-7771'},
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {'bs': 'synergize scalable supply-chains', 'name': 'Deckow-Crist', 'catchPhrase': 'Proactive didactic contingency'}
 },
 {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {geo: {'lat': '-68.6102', 'lng': '-47.0653'}, city: 'McKenziehaven', suite: 'Suite 847', street: 'Douglas Extension', zipcode: '59590-4157'},
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {'bs': 'e-enable strategic applications', 'name': 'Romaguera-Jacobson', 'catchPhrase': 'Face to face bifurcated interface'}
 },
  {
    id: 4,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {geo: {'lat': '-37.3159', 'lng': '81.1496'}, city: 'Gwenborough', suite: 'Apt. 556', street: 'Kulas Light', zipcode: '92998-3874'},
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {'bs': 'harness real-time e-markets', 'name': 'Romaguera-Crona', 'catchPhrase': 'Multi-layered client-server neural-net'}
 },
 {
    id: 5,
    name: "Arvin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {geo: {'lat': '-43.9509', 'lng': '-34.4618'}, city: 'Wisokyburgh', suite: 'Suite 879', street: 'Victor Plains', zipcode: '90566-7771'},
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {'bs': 'synergize scalable supply-chains', 'name': 'Deckow-Crist', 'catchPhrase': 'Proactive didactic contingency'}
 },
 {
    id: 6,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {geo: {'lat': '-68.6102', 'lng': '-47.0653'}, city: 'McKenziehaven', suite: 'Suite 847', street: 'Douglas Extension', zipcode: '59590-4157'},
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {'bs': 'e-enable strategic applications', 'name': 'Romaguera-Jacobson', 'catchPhrase': 'Face to face bifurcated interface'}
 },
  {
    id: 7,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {geo: {'lat': '-37.3159', 'lng': '81.1496'}, city: 'Gwenborough', suite: 'Apt. 556', street: 'Kulas Light', zipcode: '92998-3874'},
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {'bs': 'harness real-time e-markets', 'name': 'Romaguera-Crona', 'catchPhrase': 'Multi-layered client-server neural-net'}
 },
 {
    id: 8,
    name: "Arvin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {geo: {'lat': '-43.9509', 'lng': '-34.4618'}, city: 'Wisokyburgh', suite: 'Suite 879', street: 'Victor Plains', zipcode: '90566-7771'},
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {'bs': 'synergize scalable supply-chains', 'name': 'Deckow-Crist', 'catchPhrase': 'Proactive didactic contingency'}
 },
 {
    id: 9,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {geo: {'lat': '-68.6102', 'lng': '-47.0653'}, city: 'McKenziehaven', suite: 'Suite 847', street: 'Douglas Extension', zipcode: '59590-4157'},
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {'bs': 'e-enable strategic applications', 'name': 'Romaguera-Jacobson', 'catchPhrase': 'Face to face bifurcated interface'}
 },
  {
    id: 10,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {geo: {'lat': '-37.3159', 'lng': '81.1496'}, city: 'Gwenborough', suite: 'Apt. 556', street: 'Kulas Light', zipcode: '92998-3874'},
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {'bs': 'harness real-time e-markets', 'name': 'Romaguera-Crona', 'catchPhrase': 'Multi-layered client-server neural-net'}
 },
 {
    id: 11,
    name: "Arvin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {geo: {'lat': '-43.9509', 'lng': '-34.4618'}, city: 'Wisokyburgh', suite: 'Suite 879', street: 'Victor Plains', zipcode: '90566-7771'},
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {'bs': 'synergize scalable supply-chains', 'name': 'Deckow-Crist', 'catchPhrase': 'Proactive didactic contingency'}
 },
 {
    id: 12,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {geo: {'lat': '-68.6102', 'lng': '-47.0653'}, city: 'McKenziehaven', suite: 'Suite 847', street: 'Douglas Extension', zipcode: '59590-4157'},
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {'bs': 'e-enable strategic applications', 'name': 'Romaguera-Jacobson', 'catchPhrase': 'Face to face bifurcated interface'}
 },
];

@Component({
  selector: 'sanjoy-audhikari-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'address'];
  userData = new MatTableDataSource(USER_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.userData.sort = this.sort;
    this.userData.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  routeToUserPhotoAlbum(user: any) {
    const userId = user ? user.id : null;
    this.router.navigate(['/userPhotoAlbum', userId ]);
  }
}
