# Page

## Intro
>스마일페이 실행 첫 화면

## Main
>메인 페이지
https://spweb.auction.co.kr/ko/User/MyInfo/MySmile

## SmileLinker Use Agreement
>스마일링크 이용 신청 페이지

- Component
    - 스마일링커 안내
    - 스마일링커 이용 신청
    
- API
    - UserInfo
    
    ```js
    {
        data: {
            user: {
                id: 'jaewjang', // 사용자 ID,
                isSmileLinkerMember: false // 스마일링커 사용 여부
            }
        }
    }
    ```
    

## Vip Item List
>사이트별 광고 대상 딜 리스트 페이지

- Component
    - 사이트 구분 탭
    - 딜카드
    - SNS 공유 버튼

- API
    - DealItemList (사이트별 광고 대상 딜 리스트 정보)
        
    ```js
    {
        data: {
            type: 'auction', // 'auction', 'gmarket', 'g9' 3개의 값으로 요청드립니다.
            list: [
                // 딜 리스트
                {
                    isPurchased: true, // 상품 구매 여부
                    isAdType: [
                        // 공유 타입별 상품 공유 정보
                        {
                            type: 'kakaotalk', // 공유 타입
                            status: false,  // 공유 여부(공유 카운트로 클라이언트에서 구분도 가능)
                            count: 0, // 공유 카운트
                            shareHashParam: 'soltValue#1231ADb9305ls0KLS2' // 공유 관련 수집 해시값? 
                            // shareHashParam값은 서버에서 공유 데이터 처리에 필요한 값 주시면 
                            // 공유시 url에 파라미터로 추가하여 링크 생성 하도록 하겠습니다.
                        },
                        {
                            type: 'facebook',
                            status: false,
                            count: 0,
                            shareHashParam: 'soltValue#1231ADb9305ls0KLS2'
                        }
                    ],
                    thumbnailUrl: 'http://image.auction.co.kr/itemimage/12/ba/c6/12bac605e3.jpg', // 딜 썸네일 이미지 경로
                    vipLandingUrl: 'http://mobile.auction.co.kr/Item/ViewItem.aspx?Itemno=B362923562', // vip 링크
                    title: '오뚜기 라면 멀티팩 모음/진라면/김치라면', // 상품 타이틀
                    category: '라면/컵라면',
                    itemNumber: 'B362923562',
                    brandName: '오뚜기',
                    sellerID: 'jaewjang'
                }
            ]
        }
    }
    ```

## Dashboard
>광고 관련 정보 노출 페이지

- Component
    - 링커 등급
    - 링커 순위
    - 카테고리별 공유한 광고 카운트
    - SNS 탕입별 공유한 광고 카운트
    - 전체 공유 카운트
    - 구매전환 카운트
    - 광고한 딜 리스트 정렬(날짜별, 기간별, 카테고리별, 공유타입별)
    
- API
    - Dashboard
    ```js
    {
        data: {
            user: {
                id: 'jaewjang', // 사용자 ID
                point: 5,431, // 보유 포인트
                cach: 3,981 // 보유 스마일 캐시
            },
            smilelinker: {
                isMember: true, // 스마일링커 가입 여부
                grade: 'A', // A 최상등급, B 중간등급, C 기본등급
                adTotalCount: 1,243, // 내가 공유한 광고 카운트
                adPurchasedCount: 12, // 내가 공유한 링크로 유입되어 구매 전환이 발생한 횟수
                adLank: 102, // 전체 광고 순위 (기준은 구매전환 or 공유횟수 확인필요)
                list: [
                    // 내가 광고한 딜 리스트
                    {
                        isPurchased: true, // 상품 구매 여부
                        isAdType: [
                            // 공유 타입별 상품 공유 정보
                            {
                                type: 'kakaotalk', // 공유 타입
                                status: false,  // 공유 여부(공유 카운트로 클라이언트에서 구분도 가능)
                                count: 0, // 공유 카운트
                                shareHashParam: 'soltValue#1231ADb9305ls0KLS2' // 공유 관련 수집 해시값? 
                                // shareHashParam값은 서버에서 공유 데이터 처리에 필요한 값 주시면 
                                // 공유시 url에 파라미터로 추가하여 링크 생성 하도록 하겠습니다.
                            },
                            {
                                type: 'facebook',
                                status: false,
                                count: 0,
                                shareHashParam: 'soltValue#1231ADb9305ls0KLS2'
                            }
                        ],
                        thumbnailUrl: 'http://image.auction.co.kr/itemimage/12/ba/c6/12bac605e3.jpg', // 딜 썸네일 이미지 경로
                        vipLandingUrl: 'http://mobile.auction.co.kr/Item/ViewItem.aspx?Itemno=B362923562', // vip 링크
                        title: '오뚜기 라면 멀티팩 모음/진라면/김치라면', // 상품 타이틀
                        category: '라면/컵라면',
                        itemNumber: 'B362923562',
                        brandName: '오뚜기',
                        sellerID: 'jaewjang'
                    }
                ]
            }
            
        }
    }
    ```