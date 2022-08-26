import { LiveAnnouncer } from "@angular/cdk/a11y";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UsersPhotoAlbumService } from "./users-photo-album.service";

@Component({
  selector: 'sanjoy-audhikari-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'email', 'address'];
  userData: any;
  getUsersSubscription!: Subscription;

  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private usersPhotoAlbumService: UsersPhotoAlbumService,
    private snackBar: MatSnackBar) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getUsersSubscription = this.usersPhotoAlbumService.getUsers()
      .subscribe({
        next: (data) => {
          this.userData = new MatTableDataSource(data);
          this.userData.sort = this.sort;
          this.userData.paginator = this.paginator;
        },
        error: () => {
          this.snackBar.open("Error retrieving data!", "",
            {
              duration: 2000,
              panelClass: ['mat-toolbar', 'mat-warn']
            })
        }
      })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  routeToUserPhotoAlbum(user: any) {
    const userId = user ? user.id : null;
    this.router.navigate(['/userPhotoAlbum', userId]);
  }

  ngOnDestroy(): void {
    if (this.getUsersSubscription) {
      this.getUsersSubscription.unsubscribe();
    }
  }
}
