-- 코드를 입력하세요
SELECT member_id, member_name,	gender,	TO_CHAR(date_of_birth, 'YYYY-MM-DD')
FROM MEMBER_PROFILE
WHERE TLNO IS NOT NULL
--AND EXTRACT(MONTH FROM DATE_OF_BIRTH) =3
AND TO_CHAR(date_of_birth,'MM')='03'
AND GENDER='W'
ORDER BY member_id ASC