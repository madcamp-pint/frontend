import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Screen = () => {
  // State for form values
  const [rangeValue, setRangeValue] = useState("10m");
  const [privacyValue, setPrivacyValue] = useState("public");
  const [taggedFriends, setTaggedFriends] = useState([
    { name: "박민우" },
    { name: "이준호" },
  ]);

  // Handle range change
  const handleRangeChange = (event, newValue) => {
    if (newValue !== null) {
      setRangeValue(newValue);
    }
  };

  // Handle privacy change
  const handlePrivacyChange = (event, newValue) => {
    if (newValue !== null) {
      setPrivacyValue(newValue);
    }
  };

  // Files data
  const uploadedFiles = [
    { name: "IMG_8299.png", type: "image" },
    { name: "VID_1349.mp4", type: "video" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fafafa",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Container maxWidth="sm" sx={{ py: 5 }}>
        <Paper
          elevation={1}
          sx={{
            width: "100%",
            maxWidth: 441,
            mx: "auto",
            p: 3,
            borderRadius: 2,
          }}
        >
          {/* Title Section */}
          <TextField
            fullWidth
            variant="standard"
            placeholder="핀트 이름을 입력하세요"
            sx={{ mb: 2 }}
          />

          <Divider sx={{ my: 2 }} />

          {/* Location Section */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            위치
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value="대전광역시 유성구 대학로 291"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="상세 위치를 입력하세요(선택)"
            sx={{ mb: 3 }}
          />

          {/* Range Section */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            공급 제한 범위
          </Typography>

          <ToggleButtonGroup
            value={rangeValue}
            exclusive
            onChange={handleRangeChange}
            fullWidth
            sx={{ mb: 3 }}
          >
            <ToggleButton value="10m" sx={{ textTransform: "none" }}>
              10m
            </ToggleButton>
            <ToggleButton value="50m" sx={{ textTransform: "none" }}>
              50m
            </ToggleButton>
            <ToggleButton value="100m" sx={{ textTransform: "none" }}>
              100m
            </ToggleButton>
          </ToggleButtonGroup>

          {/* Privacy Section */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            공개 여부
          </Typography>

          <ToggleButtonGroup
            value={privacyValue}
            exclusive
            onChange={handlePrivacyChange}
            fullWidth
            sx={{ mb: 3 }}
          >
            <ToggleButton value="public" sx={{ textTransform: "none" }}>
              공개
            </ToggleButton>
            <ToggleButton value="private" sx={{ textTransform: "none" }}>
              비공개
            </ToggleButton>
          </ToggleButtonGroup>

          {/* Tag Section */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            친구 태그
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Autocomplete
              freeSolo
              options={[]}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="친구 이름 입력하세요"
                  size="small"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>

          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            {taggedFriends.map((friend, index) => (
              <Chip key={index} label={friend.name} variant="outlined" />
            ))}
          </Stack>

          {/* Upload Section */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            사진 및 동영상
          </Typography>

          <Box sx={{ mb: 1 }}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<AddIcon />}
              sx={{
                height: 55,
                borderStyle: "dashed",
                justifyContent: "center",
                textTransform: "none",
              }}
            >
              최대 100MB
              <input type="file" hidden />
            </Button>
          </Box>

          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            {uploadedFiles.map((file, index) => (
              <Chip
                key={index}
                label={file.name}
                variant="outlined"
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Stack>

          {/* Caption Section */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            캡션 추가
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={5}
            placeholder="친구 맘을 적어주세요"
            variant="outlined"
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default Screen;
