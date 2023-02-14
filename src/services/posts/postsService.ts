// Libs do node
import path from 'path'; // Indicar caminhos
import fs from 'fs/promises'; // Ler diretorios e arquivos
import matter from 'gray-matter';
import * as console from 'console'; // Para pegar os dados no arquivo md

export interface Post {
  metadata: {
    date: string;
    url: string;
    excerpt: string;
    tags: string[];
  };
  title: string;
  slug: string; // "ID do post" -> nome do arquivo ou titulo reduzido
  content: string;
}

export default function PostsService() {
  return {
    async getAll(): Promise<Post[]> {
      // Indica o caminha do diretorio
      const PATH_POSTS = path.resolve('.', '_data', 'posts');
      //console.log(PATH_POSTS);

      // Faz a leitura dos arquivos dentro do diretorio
      const postFiles = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' });
      //console.log(postFiles);

      // Iterando os arquivos encontrados no diretorio
      // Para cada arquivo é feita sua leitura
      const postsPromise = postFiles.map(async (postFileName) => {
        // Monta o path de cada arquivo
        const filePath = path.join(PATH_POSTS, postFileName);
        const postFile = await fs.readFile(filePath, { encoding: 'utf-8' });
        //console.log(postFile);
        // Pega os dados e conteudo
        const { data, content } = matter(postFile);
        //console.log(data);
        //console.log(content);
        // Criando o post
        const post: Post = {
          metadata: {
            date: new Date(data.date).toISOString(),
            url: data.url,
            excerpt: data.excerpt,
            tags: data.tags
          },
          title: data.title,
          slug: postFileName.replace('.md', ''),
          content: content,
        };
        //console.log(post);
        return post;
      });
      // Pegar posts da promise
      const posts = Promise.all(postsPromise);
      //console.log(posts);
      return posts;
    }
  };
}