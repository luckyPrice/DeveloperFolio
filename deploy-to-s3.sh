#!/bin/bash

# 변수 설정
BUILD_DIR="./build"  # 빌드된 파일이 있는 폴더
S3_BUCKET="asw-portfolio"  # S3 버킷 이름

# 기존 파일 삭제
echo "Removing existing files from S3..."
aws s3 rm s3://$S3_BUCKET/ --recursive

# 새로운 파일 업로드
echo "Uploading new build files..."
aws s3 cp $BUILD_DIR s3://$S3_BUCKET/ --recursive

echo "Deployment to S3 completed!"

aws cloudfront create-invalidation --distribution-id E14RBO18FQSVTT --paths "/*"
# E14RBO18FQSVTT