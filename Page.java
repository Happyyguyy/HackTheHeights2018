package online311;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Page {
	
	String pageTitle; 
	static List<Post> posts;
	static List<String> tags;
	
	/**
	 * @param pageTitle - The title of the community page
	 * @param tags - The tags that the page will be filtered by
	 */
	public Page(String pageTitle, String[] tags) {
		this.pageTitle = pageTitle;
		posts = new ArrayList<>();
		this.tags = new ArrayList<>();
		for(String tag : tags) {
			this.tags.add(tag);
		}
	}
	
	public static void main(String[] args) {
		Page 

	}

}
