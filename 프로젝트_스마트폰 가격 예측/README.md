# 스마트폰 가격 예측 프로젝트

스마트폰의 주요 사양 데이터를 분석하고, 여러 머신러닝 회귀 모델을 활용하여 스마트폰 가격을 예측한 프로젝트입니다.

Google Colab 환경에서 데이터 확인 및 전처리, 탐색적 데이터 분석(EDA), 머신러닝 모델 학습, 하이퍼파라미터 변경 및 모델 성능 비교를 진행했습니다.

---

## 1. 프로젝트 개요

* **프로젝트 주제:** 스마트폰 사양 기반 가격 예측
* **개발 환경:** Google Colab
* **사용 언어:** Python
* **데이터 크기:** 300개 레코드 / 23개 속성
* **예측 대상:** 스마트폰 가격 (`price_inr`)
* **문제 유형:** 회귀(Regression)

스마트폰의 브랜드, 운영체제, 프로세서, RAM, 저장공간, 카메라, 배터리 등 다양한 사양 정보를 활용하여 스마트폰 가격을 예측하는 것을 목표로 진행했습니다.

또한 하나의 모델만 사용하는 것이 아니라 여러 회귀 모델을 적용하고 성능을 비교하여 가격 예측에 적합한 모델을 확인했습니다.

---

## 2. 사용 기술

* Python
* Pandas
* NumPy
* Matplotlib
* Scikit-learn
* Google Colab

---

## 3. 데이터 구성

스마트폰 가격 예측을 위해 스마트폰 제품 정보를 포함한 데이터를 사용했습니다.

주요 데이터 항목은 다음과 같습니다.

* 브랜드 (`brand`)
* 운영체제 (`operating_system`)
* 프로세서 (`chipset`)
* RAM (`ram_raw`)
* 저장공간 (`storage_raw`)
* 후면 카메라 (`rear_camera_raw`)
* 전면 카메라 (`front_camera_raw`)
* 배터리 용량 (`battery_raw`)
* 고속 충전 (`fast_charging_raw`)
* 디스플레이 크기 (`display_raw`)
* 디스플레이 종류 (`display_type`)
* 해상도 (`resolution`)
* 가격 (`price_inr`)

---

## 4. 데이터 전처리

머신러닝 모델을 학습하기 전에 데이터 구조와 결측값을 확인하고 전처리를 진행했습니다.

확인 결과 일부 컬럼에서 결측값이 존재했습니다.

* `launch_date`: 18개
* `nfc_raw`: 54개

데이터의 결측값과 자료형을 확인하고 머신러닝 모델이 사용할 수 있는 형태로 데이터를 정리했습니다.

---

## 5. 탐색적 데이터 분석

모델을 학습하기 전에 스마트폰 데이터의 특징과 가격에 영향을 줄 수 있는 요소를 확인하기 위해 탐색적 데이터 분석을 진행했습니다.

### 스마트폰 가격 분포


<img width="650" height="453" alt="스크린샷 2026-08-26 163732" src="https://github.com/user-attachments/assets/737912a6-d531-4b52-8dee-15cd22e0428a" />



스마트폰 가격 분포를 확인한 결과, 대부분의 제품이 상대적으로 낮은 가격 구간에 분포하고 있으며 일부 고가 스마트폰이 존재하는 것을 확인했습니다.

이를 통해 스마트폰 가격 데이터가 균등하게 분포되어 있지 않다는 특징을 확인했습니다.

---

### RAM 용량별 평균 스마트폰 가격

<img width="668" height="457" alt="스크린샷 2026-08-26 163552" src="https://github.com/user-attachments/assets/1c70b713-db3c-48c9-a4e7-f8846da0112e" />



RAM 용량별 평균 스마트폰 가격을 비교한 결과, RAM 용량이 증가할수록 평균 가격도 증가하는 경향이 나타났습니다.

이를 통해 RAM이 스마트폰 가격에 영향을 줄 수 있는 주요 요소 중 하나임을 확인했습니다.

---

## 6. 머신러닝 모델

스마트폰 가격은 연속적인 수치 데이터이기 때문에 회귀(Regression) 모델을 사용했습니다.

### Linear Regression

데이터의 여러 특성과 스마트폰 가격 사이의 선형적인 관계를 이용하여 가격을 예측했습니다.

기본적인 회귀 모델의 성능을 확인하기 위한 기준 모델로 사용했습니다.

### Decision Tree Regressor

여러 조건을 기준으로 데이터를 분할하여 스마트폰 가격을 예측했습니다.

트리 깊이에 따른 성능 차이를 확인하기 위해 다음 두 가지 설정을 비교했습니다.

* `max_depth = 3`
* `max_depth = 5`

### Random Forest Regressor

여러 개의 Decision Tree를 학습한 뒤 각각의 결과를 종합하여 스마트폰 가격을 예측했습니다.

사용하는 트리 개수에 따른 성능 변화를 확인하기 위해 다음 두 가지 설정을 비교했습니다.

* `n_estimators = 50`
* `n_estimators = 100`

---

## 7. 모델 성능 비교

각 모델의 성능은 결정계수(R² Score)를 이용하여 비교했습니다.

### 모델별 R² Score 비교

<img width="701" height="463" alt="스크린샷 2026-08-26 163536" src="https://github.com/user-attachments/assets/ed042586-883a-49d5-a611-b0e1bf80d4dc" />



| 모델              | 하이퍼파라미터        |   R² Score |
| ----------------- | -------------------- | ---------: |
| Linear Regression | 기본                  |     0.6364 |
| Decision Tree     | `max_depth = 3`      |     0.6556 |
| Decision Tree     | `max_depth = 5`      |     0.7068 |
| Random Forest     | `n_estimators = 50`  | **0.7885** |
| Random Forest     | `n_estimators = 100` |     0.7803 |

모델 성능을 비교한 결과 **`n_estimators = 50`으로 설정한 Random Forest 모델이 R² Score 0.7885로 가장 높은 성능을 기록했습니다.**

Decision Tree에서는 `max_depth`를 3에서 5로 증가시켰을 때 성능이 향상되었습니다.

Random Forest에서는 트리 개수를 50개에서 100개로 증가시켰지만 성능이 추가로 향상되지 않았으며, 오히려 R² Score가 소폭 감소했습니다.

이를 통해 모델의 복잡도를 증가시키는 것이 항상 성능 향상으로 이어지는 것은 아니라는 점을 확인했습니다.

---

## 8. 프로젝트 결과

여러 회귀 모델을 이용하여 스마트폰 가격을 예측하고 성능을 비교한 결과 Random Forest 모델이 가장 높은 예측 성능을 보였습니다.

특히 Random Forest에서 `n_estimators = 50`으로 설정했을 때 **R² Score 0.7885**로 실험한 모델 중 가장 높은 결과를 기록했습니다.

프로젝트를 통해 스마트폰의 여러 사양 데이터를 활용하여 실제 가격을 예측하는 머신러닝 모델을 구현할 수 있음을 확인했습니다.

---

## 9. 프로젝트를 통해 배운 점

이 프로젝트를 통해 머신러닝 모델을 단순히 실행하는 것뿐만 아니라 데이터 분석부터 모델 성능 비교까지 전체적인 머신러닝 프로젝트 진행 과정을 경험했습니다.

* 데이터 구조 및 변수 확인
* 결측값 확인 및 데이터 전처리
* 탐색적 데이터 분석 및 시각화
* 회귀 문제와 회귀 모델에 대한 이해
* Linear Regression 모델 학습
* Decision Tree 모델 학습
* Random Forest 모델 학습
* 하이퍼파라미터 변경에 따른 성능 비교
* R² Score를 이용한 모델 평가
* 여러 모델의 결과 비교 및 최종 모델 선정

특히 동일한 데이터를 사용하더라도 사용하는 알고리즘과 하이퍼파라미터 설정에 따라 모델의 성능이 달라질 수 있다는 점을 확인했습니다.

---

## 10. 프로젝트 파일

```text
Smartphone-Price-Prediction/
│
├── README.md
├── smartphone_price_prediction.ipynb
├── presentation.pdf
│
└── images/
    ├── price_distribution.png
    ├── ram_price.png
    └── model_comparison.png
```

### `smartphone_price_prediction.ipynb`

Google Colab에서 작성한 데이터 전처리, 데이터 분석, 머신러닝 모델 학습 및 성능 비교 코드입니다.

### `presentation.pdf`

프로젝트 진행 과정과 분석 결과를 정리하여 발표할 때 사용한 자료입니다.

### `images/`

README에서 주요 분석 및 모델 성능 결과를 바로 확인할 수 있도록 사용한 그래프 이미지입니다.

---

## 11. 실행 방법

1. `smartphone_price_prediction.ipynb` 파일을 Google Colab에서 엽니다.
2. 필요한 Python 라이브러리를 불러옵니다.
3. 데이터 확인 및 전처리 코드를 실행합니다.
4. 탐색적 데이터 분석 및 시각화 코드를 실행합니다.
5. Linear Regression, Decision Tree, Random Forest 모델을 학습합니다.
6. 각 모델의 R² Score를 확인하고 성능을 비교합니다.

---

## 12. 활용 가능성

학습한 모델을 활용하면 스마트폰의 주요 사양을 기반으로 가격을 예측할 수 있습니다.

이를 확장하면 스마트폰 제품의 가격 비교 및 분석이나 제품 기획 과정에서 사양에 따른 가격 수준을 참고하는 용도로 활용할 수 있습니다.
