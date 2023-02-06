import json
import urllib.request

url = "https://openapi.naver.com/v1/papago/n2mt"
client_id = "2Rql9F4A4qbEI2DhUe2i"  # 개발자센터에서 발급받은 Client ID 값
client_secret = "QGlM99Zhql"  # 개발자센터에서 발급받은 Client Secret 값

paths = [
    "plane-departure",
    "hotel",
    "car-side",
    "cart-shopping",
    "utensils",
    "landmark",
]

langs = [
    # "en",
    "ja",
    "zh-CN",
    "vi",
    "id",
    "th",
    "de",
    "ru",
    "es",
    "it",
    "fr",
]

encTexts = {
    "plane-departure": [
        "이 물건, 기내 반입이 가능한가요?",
        "초과금이 얼마나 되나요?",
        "파리행 비행기를 예약하고 싶어요.",
        "왕복 티켓으로 주세요.",
        "시내로 들어가는 택시는 어디서 타나요?",
    ],
    "hotel": [
        "방에 키를 두고 나왔어요.",
        "체크인 부탁드려요.",
        "빈 방 있나요?",
        "하룻밤 가격이 얼마인가요?",
        "충전기를 빌릴 수 있을까요?",
        "와이파이는 어떻게 사용하나요?",
    ],
    "car-side": [
        "근처에 가장 유명한 관광지가 어디인가요?",
        "요금은 얼마인가요?",
        "카드로 계산이 되나요?",
        "시간이 얼마나 걸리나요?",
    ],
    "cart-shopping": [
        "이거 입어 봐도 될까요?",
        "더 큰 사이즈가 있나요?",
        "더 작은 사이즈가 있나요?",
        "이 품목들은 면세가 되나요?",
        "이 티셔츠는 얼마인가요?",
    ],
    "utensils": [
        "실례합니다. 주문할게요.",
        "추천할 만한 음식이 있나요?",
        "제가 주문한 음식이 아닌데요.",
        "남은 음식을 싸갈 수 있을까요?",
    ],
    "landmark": [
        "관광 안내소가 어디인가요?",
        "입장료는 얼마인가요?",
        "관광 안내 책자 하나 주세요.",
        "사진 좀 찍어주실 수 있나요?",
    ],
}

for lang in langs:
    for path in paths:
        file_path = "./" + lang + "_" + path + ".json"
        save_data = {}

        for arr in encTexts[path]:
            encText = urllib.parse.quote(arr)
            data = "source=ko&target=" + lang + "&text=" + encText

            request = urllib.request.Request(url)
            request.add_header("X-Naver-Client-Id", client_id)
            request.add_header("X-Naver-Client-Secret", client_secret)
            response = urllib.request.urlopen(request, data=data.encode("utf-8"))

            rescode = response.getcode()

            if rescode == 200:
                response_body = response.read()
                return_data = json.loads(response_body.decode("utf-8"))

                save_data[arr] = return_data["message"]["result"]["translatedText"]
            else:
                print("Error Code:" + rescode)

        with open(file_path, "a", encoding="utf-8") as outfile:
            json.dump(save_data, outfile, ensure_ascii=False)

# with open("plane-departure_en.json", "r", encoding="UTF-8") as f:
#     json_data = json.load(f)
#     json_data = json.dumps(json_data, ensure_ascii=False)
#     print(json_data)
