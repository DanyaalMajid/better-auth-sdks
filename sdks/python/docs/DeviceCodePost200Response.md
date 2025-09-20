# DeviceCodePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_code** | **str** | The device verification code | [optional] 
**user_code** | **str** | The user code to display | [optional] 
**verification_uri** | **str** | The URL for user verification | [optional] 
**verification_uri_complete** | **str** | The complete URL with user code | [optional] 
**expires_in** | **float** | Lifetime in seconds of the device code | [optional] 
**interval** | **float** | Minimum polling interval in seconds | [optional] 

## Example

```python
from better_auth.models.device_code_post200_response import DeviceCodePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCodePost200Response from a JSON string
device_code_post200_response_instance = DeviceCodePost200Response.from_json(json)
# print the JSON string representation of the object
print(DeviceCodePost200Response.to_json())

# convert the object into a dict
device_code_post200_response_dict = device_code_post200_response_instance.to_dict()
# create an instance of DeviceCodePost200Response from a dict
device_code_post200_response_from_dict = DeviceCodePost200Response.from_dict(device_code_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


