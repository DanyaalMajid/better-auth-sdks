# SsoRegisterPostRequestMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The field in the user info response that contains the id. Defaults to &#39;sub&#39; | 
**email** | **str** | The field in the user info response that contains the email. Defaults to &#39;email&#39; | 
**email_verified** | **str** | The field in the user info response that contains whether the email is verified. defaults to &#39;email_verified&#39; | [optional] 
**name** | **str** | The field in the user info response that contains the name. Defaults to &#39;name&#39; | 
**image** | **str** | The field in the user info response that contains the image. Defaults to &#39;picture&#39; | [optional] 
**extra_fields** | **str** |  | [optional] 

## Example

```python
from better_auth.models.sso_register_post_request_mapping import SsoRegisterPostRequestMapping

# TODO update the JSON string below
json = "{}"
# create an instance of SsoRegisterPostRequestMapping from a JSON string
sso_register_post_request_mapping_instance = SsoRegisterPostRequestMapping.from_json(json)
# print the JSON string representation of the object
print(SsoRegisterPostRequestMapping.to_json())

# convert the object into a dict
sso_register_post_request_mapping_dict = sso_register_post_request_mapping_instance.to_dict()
# create an instance of SsoRegisterPostRequestMapping from a dict
sso_register_post_request_mapping_from_dict = SsoRegisterPostRequestMapping.from_dict(sso_register_post_request_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


