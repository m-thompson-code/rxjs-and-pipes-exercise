import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share, shareReplay, switchMap } from 'rxjs/operators';
import { EmailPipe } from './pipes/email.pipe';
import { Comment, CommentService } from './services/comment.service';
import { Post, PostService } from './services/post.service';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  post: Post;
  comments: Comment[];
  user: User;

  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.postService.getPost(1).subscribe((post) => {
      this.post = post;

      this.userService.getUser(post.userId).subscribe((user) => {
        this.user = user;
      });

      this.commentService.getComments(post.id).subscribe((comments) => {
        this.comments = comments;
      });
    });
  }
}
