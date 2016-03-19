<?php
		$id=1; 
		$n=4; 
		$recent = new WP_Query("cat=$id&showposts=$n"); 
			while($recent->have_posts()) : $recent->the_post();?>
    <li><span> <?php the_date(); ?>.</span>
        <a href="<?php the_permalink() ?>" rel="bookmark">
            <?php the_title(); ?>
        </a>
        <a class="more-trans" href="<?php the_permalink() ?>">ПОДРОБНЕЕ</a>
    </li>
    <?php endwhile; ?>