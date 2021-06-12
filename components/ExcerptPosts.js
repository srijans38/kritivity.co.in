import React from 'react';
import styles from '../styles/components/ExcerptPosts.module.css';

export default function ExcerptPosts() {
  let excerptPosts = [
    {
      title: 'Vegetable Daliya – Easy and healthy breakfast recipe',
      category: 'RECIPES',
      excerpt:
        'Hey Everyone! So, first of all I want to know what’s your favorite meal of the day? Well, for me it’s definitely breakfast. I love having a good variety for my breakfast everyday and I absolutely love having breakfast buffet. Every time I travel or check in to a hotel I certainly look forward to the breakfast buffet. The most easiest and simplest breakfast to have is of course eggs or any cereal, but it is kinda boring to have it every single day. ',
      tags: ['Chhattisgarhi Cuisine', 'Main Course', 'Gravy'],
      image: '/Post Image.png',
    },
    {
      title: 'Vegetable Daliya – Easysadsda and healthy breakfast recipe',
      category: 'RECIPES',
      excerpt:
        'Hey Everyone! So, first of all I want to know what’s your favorite meal of the day? Well, for me it’s definitely breakfast. I love having a good variety for my breakfast everyday and I absolutely love having breakfast buffet. Every time I travel or check in to a hotel I certainly look forward to the breakfast buffet. The most easiest and simplest breakfast to have is of course eggs or any cereal, but it is kinda boring to have it every single day. ',
      tags: ['Chhattisgarhi Cuisine', 'Main Course', 'Gravy'],
      image: '/Post Image.png',
    },
    {
      title: 'Vegetable Daliya – EasyaASDA and healthy breakfast recipe',
      category: 'RECIPES',
      excerpt:
        'Hey Everyone! So, first of all I want to know what’s your favorite meal of tsingle day. ',
      tags: ['Chhattisgarhi Cuisine', 'Main Course', 'Gravy'],
      image: '/Post Image.png',
    },
  ];
  return (
    <div className={styles.ExcerptPosts}>
      {excerptPosts.map((post) => (
        <div className={styles.ExcerptPost} key={post.title}>
          <img src={post.image} className={styles.Image} />
          <div className={styles.ExcerptPost_left}>
            <h1 className={styles.Title}>{post.title}</h1>
            <p className="Category">{post.category}</p>
            <p className={styles.Excerpt}>{post.excerpt}</p>
            <div className={styles.Tags}>
              {post.tags.map((tag) => (
                <p className={styles.Tag}>{tag}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
