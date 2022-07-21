import shortid from "shortid";
import generateKey from "generate-password";

export class Post {
  public url: string;
  public specialKey: string;
  public content: string;
  public createdAt: number;

  constructor(props: Omit<Post, "url" | "specialKey">) {
    this.url = shortid.generate();
    this.specialKey = generateKey.generate({
      length: 10,
      numbers: true,
    });
    this.content = props.content;
    this.createdAt = props.createdAt;
  }
}
