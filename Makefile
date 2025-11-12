proto:
	@echo "Generating protobuf files for landing..."
	rm -rf ./src/pb/*
	protoc \
		--proto_path=../peakpal-server/proto \
		--js_out=import_style=commonjs,binary:./src/pb \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/pb \
		../peakpal-server/proto/*.proto
	@echo "Protobuf generation complete."

.PHONY: proto
