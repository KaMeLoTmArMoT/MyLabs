import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PlaylistsComponent } from './playlists.component';
import { AlbumService } from "../services/album.service";
import { Observable, of } from "rxjs";
import { ALBUMS } from "../shared/albums";

describe('PlaylistsComponent', () => {
  let component: PlaylistsComponent;
  let fixture: ComponentFixture<PlaylistsComponent>;

  beforeEach(async(() => {
    const albumServiceStub = {
      getAlbums: function (): Observable<any> {
        return of(ALBUMS)
      }
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{path: 'playlists', component: PlaylistsComponent}])
      ],
      declarations: [ PlaylistsComponent ],
      providers: [
        { provide: AlbumService, useValue: albumServiceStub }
      ]
    })
    .compileComponents();

    const albumservice = TestBed.get(AlbumService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be 1 item',  () => {
    expect(component.albums.length).toBe(2);
    expect(component.albums[0].name).toBe("T-Fest молодость.");
    expect(component.albums[1].songs.length).toBe(1);
  });
});
