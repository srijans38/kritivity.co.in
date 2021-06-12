import Image from 'next/image';
import React from 'react';
import styles from '../../styles/pages/Post.module.css';

export default function Post() {
  return (
    <div className={styles.PostPage}>
      <Image
        src="/food.jpg"
        width="1280"
        height="500"
        className={styles.Image}
      />
      <div className={styles.ContentWrapper}>
        <div className={styles.Content}>
          <h1 className={styles.PostTitle}>The best Ramen Noodles in Tokyo</h1>
          <p className="Category">RECIPES</p>
          <p className={styles.BlogText}>
            Hey Everyone! So, first of all I want to know what’s your favorite
            meal of the day? Well, for me it’s definitely breakfast. I love
            having a good variety for my breakfast everyday and I absolutely
            love having breakfast buffet. Every time I travel or check in to a
            hotel I certainly look forward to the breakfast buffet. The most
            easiest and simplest breakfast to have is of course eggs or any
            cereal, but it is kinda boring to have it every single day.
            Breakfast should be a heavy meal as well as simple and quick to make
            as the mornings are the most busiest time of the day. Apart from
            having bread and eggs for breakfast, I love having vegetable daliya.
            It is a complete wholesome meal with rich nutritious values. Most
            people have the misconception of daliya being a blah food but
            actually if made well, it tastes delicious. Those who don’t know
            about daliya, it is basically a cracked wheat made from durum wheat
            and is known as Bulgur. Now, let’s head to the recipe.
          </p>
          <h2 className={styles.H2}>Ingredients</h2>
          <ul className={styles.BlogText}>
            <li>A cup of wheat daliya ( serves 2 )</li>
            <ul>
              <li>Vegetables of your choice, I have added –</li>
              <li>A diced carrot</li>
              <li>A medium size chopped onions</li>
              <li>Handful of peas</li>
              <li>3 chopped green chillies</li>
            </ul>
            <li>Handful of chopped coriander leaves</li>
            <li>A tsp of cumin seeds / jeera</li>
            <li>A tsp of mustard seeds / sarso</li>
            <li>10-12 crushed garlic</li>
            <li>An inch of crushed ginger</li>
            <li>A tsp of haldi powder / turmeric</li>
            <li>A tbsp of dhaniya powder / coriander</li>
            <li>A tbsp of garam masala powder</li>
            <li>
              A tbsp of lemon juice 2 tbsps of vegetable oil Salt to taste
            </li>
          </ul>
          <h2 className={styles.H2}>How to Cook?</h2>
          <p className={styles.BlogText}>
            Hey Everyone! So, first of all I want to know what’s your favorite
            meal of the day? Well, for me it’s definitely breakfast. I love
            having a good variety for my breakfast everyday and I absolutely
            love having breakfast buffet. Every time I travel or check in to a
            hotel I certainly look forward to the breakfast buffet. The most
            easiest and simplest breakfast to have is of course eggs or any
            cereal, but it is kinda boring to have it every single day.
            Breakfast should be a heavy meal as well as simple and quick to make
            as the mornings are the most busiest time of the day. Apart from
            having bread and eggs for breakfast, I love having vegetable daliya.
            It is a complete wholesome meal with rich nutritious values. Most
            people have the misconception of daliya being a blah food but
            actually if made well, it tastes delicious. Those who don’t know
            about daliya, it is basically a cracked wheat made from durum wheat
            and is known as Bulgur. Now, let’s head to the recipe.
          </p>
        </div>
        <div className={styles.SideBar}></div>
      </div>
    </div>
  );
}
