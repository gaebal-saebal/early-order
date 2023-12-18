import React from 'react';
import {
  ProfileContainer,
  ReviewWrapper,
  ReviewsContainer,
  TagWrapper,
  ReviewTag,
} from './style';
import Image from 'next/image';
import EmojiHerart from '../icon/emoji/EmojiHerart';
import Emoji02 from '../icon/emoji/Emoji02';
import Emoji03 from '../icon/emoji/Emoji03';
import ProfileImage from '../shop-review/profile.png';
import ReviewImage from '../shop-review/review.png';
import TagAdd from '../icon/profile/TagAdd';

const ShopReviews = () => {
  return (
    <ReviewsContainer>
      <ProfileContainer>
        <Image
          src={ProfileImage}
          width={42}
          height={42}
          alt='profile-image'
          className='profile-img'
        />
        <span>sun_ny</span>
      </ProfileContainer>
      <ReviewWrapper>
        <div className='review-img-wrapper'>
          <Image
            src={ReviewImage}
            width={334}
            height={319}
            alt='Review-image'
          />
        </div>
        <div className='menu-name'>셀렉토 커피 수박쥬스 ICED</div>
        <div className='reviews'>더운 날 수박쥬스 한잔 넘 시원해용 🍉 😝</div>
      </ReviewWrapper>
      <TagWrapper>
        <ReviewTag>
          <span>
            <EmojiHerart />
          </span>
          <span>2</span>
        </ReviewTag>
        <ReviewTag>
          <span>
            <Emoji02 />
          </span>
          <span>2</span>
        </ReviewTag>
        <ReviewTag>
          <span>
            <Emoji03 />
          </span>
          <span>1</span>
        </ReviewTag>
        <TagAdd />
      </TagWrapper>
    </ReviewsContainer>
  );
};

export default ShopReviews;
