package online311;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Post {

	  String post;
	  List<String> replies;
	  
	  /**
	  *Constructor for a given Message
	  *There are initially no comments in the post
	  */
	  public Post(String newPost) {
	    post = newPost;
	    replies = new ArrayList<>();
	  }

	  /**
	  * Constructs a new message based on the user's input and adds it to the 
	  * list of messages of this page
	  */
	  public static void createPost() {
	    Scanner reader = new Scanner(System.in);
	    System.out.println("What do you want to post?");
	    String input = reader.next();
	    Post newPost = new Post(input);
//	    Page.addPost(newPost);
	    Page.posts.add(newPost);
	    
	    reader.close();
	  }
	  
	  /**
	  * Constructs a new reply based on the user's input and adds it to the 
	  * list of messages of this page
	  */
	  public void postReply() {
		Scanner reader = new Scanner(System.in);
		System.out.println("What do you want to post?");
		String input = reader.next();
		this.replies.add(input);
		
		reader.close();
	  }
	  
	  public static void main(String[] args) {
		  createPost();
		  
	  }
}
